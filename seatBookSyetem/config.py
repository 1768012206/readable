CSRF_ENABLED = True
SECRET_KEY = 'you-will-never-guess'


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