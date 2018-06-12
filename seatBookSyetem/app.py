# encoding:utf8
from flask import Flask, render_template, session
import flask
from forms import BookForm, LoginForm
import requests
import json
import pymysql
import uuid
import time
from utils.temp import headers, login_url

app = Flask(__name__)
app.config.from_object('config')
db = pymysql.connect('39.106.134.13', 'root', '123456', 'seat', charset='utf8')
cursor = db.cursor()
try:
    cursor.execute("select * from position")
    results = cursor.fetchall()
finally:
    db.close()


@app.route('/login', methods=["POST"])
def index():

    login_form = LoginForm(flask.request.form)
    book_form = BookForm(flask.request.form)
    if login_form.validate():
        username = login_form.username.data
        password = login_form.password.data
        user_info = {
            'id': username,
            'pwd': password,
            'act': 'login',
            '_': '1512131406585', }
        my_session = requests.Session()
        m = my_session.post(login_url, data=user_info, headers=headers)
        if 'ok' in json.loads(m.content.decode())['msg']:
            session['username'] = username
            session['password'] = password
            name = json.loads(m.content.decode())['data']['name']

            book_form.select.choices = [(result[1], result[1]) for result in results]
            return render_template("index.html", title='Home', form=book_form, session=session, name=name)
        else:
            return u'错误'

    return u"错误"


@app.route('/')
def login_page():
    form = LoginForm()
    return render_template("login.html", form=form)


@app.route('/saveToDB', methods=["GET", "POST"])
def submit():
    db = pymysql.connect('39.106.134.13', 'root', '123456', 'seat', charset='utf8')
    cursor = db.cursor()
    if flask.request.method == "GET":
        return render_template("index.html")
    else:
        form = BookForm(flask.request.form)
        startdate = form.startdate.data
        enddate = form.enddate.data
        username = form.username.data
        password = form.password.data
        timeArray = time.strptime(startdate, "%Y-%m-%d-%H:%M")
        startstamp = int(time.mktime(timeArray))
        timeArray = time.strptime(enddate, "%Y-%m-%d-%H:%M")
        endstamp = int(time.mktime(timeArray))
        id = str(uuid.uuid4()).replace('-', '')
        seat = form.select.data
        if endstamp <= startstamp:
            return u'请仔细选择正确的日期'
        try:
            cursor.execute("select num from position where classroom='%s'" % seat)
            cursor.execute(
                "insert into book(id, username, pwd, startdate, enddate, seatnum) values ('%s', '%s', '%s', '%s', '%s', '%s')" % (
                    id, username, password, startstamp, endstamp, cursor.fetchone()[0]))
            db.commit()
            return u"登记成功"
        except:
            return u'发生了错误，请联系管理员'
        finally:
            db.close()


if __name__ == '__main__':
    app.run()
