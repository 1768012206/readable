import requests
import pymysql

db = pymysql.connect('39.106.134.13', 'root', '123456', 'seat', charset='utf8')
cursor = db.cursor()


results = requests.get(
"http://seat.hhit.edu.cn/ClientWeb/pro/ajax/device.aspx?byType=devcls&classkind=8&display=fp&md=d&room_id=100455598&purpose=&selectOpenAty=&cld_name=default&date=2018-06-10&fr_start=23%3A50&fr_end=00%3A50&act=get_rsv_sta&_=1528645617056")
results = results.json().get('data')
i = 1449
for result in results:
    statement = "insert into position values (%d, '%s',%d)" % (i,result['name'], int(result['id'][:9]))
    print(statement)
    cursor.execute(statement)
    i += 1

db.commit()
db.close()
