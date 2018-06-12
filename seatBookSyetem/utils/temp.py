import json
import requests
import os
import datetime
import pymysql
import uuid
import time


os.environ['NO_PROXY'] = 'stackoverflow.com'

login_url = 'http://seat.hhit.edu.cn/ClientWeb/pro/ajax/login.aspx'
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Host": "seat.hhit.edu.cn",
    "Origin": "http://seat.hhit.edu.cn",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
    "Referer": "http://seat.hhit.edu.cn/ClientWeb/xcus/ic2/Default.aspx",
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
}
user_info = {
    'id': '2014122815',
    'pwd': '2014122815',
    'act': 'login',
    '_': '1512131406585',
    'seat_id': '100457354'}
date_url = 'http://seat.hhit.edu.cn/ClientWeb/pro/ajax/reserve.aspx?dev_id=100457405&lab_id=100455576&room_id=&kind_id=100455572&type=dev&prop=&test_id=&resv_id=&term=&min_user=&max_user=&mb_list=&test_name=&start=' + (
        datetime.datetime.now() + datetime.timedelta(days=1)).strftime("%Y-%m-%d") + '%2013:00&end=' + (
                   datetime.datetime.now() + datetime.timedelta(days=1)).strftime(
    "%Y-%m-%d") + '%2014:00&memo=&act=set_resv&_nocache=1524753688015'
my_session = requests.Session()
m = my_session.post(login_url, data=user_info, headers=headers)
# d = my_session.get(date_url, data=json.dumps(user_info), headers=headers)
# print(d.content.decode())
