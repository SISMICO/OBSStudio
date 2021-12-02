from flask import Flask
from flask import jsonify
from flask import request, make_response
import requests
app = Flask(__name__)
#logging.basicConfig(level=logging.INFO)

@app.route('/weather', methods=['OPTIONS','GET'])
def startup():
    #SOURCE_URL = 'https://api.tempoagora.com.br/weather?city=SaoPaulo-SP'
    SOURCE_URL = 'https://www.tempoagora.com.br/json/myclimatempo/user/weatherNow?idlocale=3477'
    if request.method == 'OPTIONS':
        return build_preflight_response()
    else:
        return build_actual_response(http_get(SOURCE_URL).json()[0]['data'][0]['weather'][0]['temperature'])

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(value):
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.data = '%d' % value
    return response

def http_get(url):
    session = requests.Session()
    session.cookies.clear()
    return session.get(
        url,
        headers={
            'Accept': 'application/json',
            'User-Agent': 'Chrome/71.0.3578.98',
            'Cache-Control': 'no-cache',
        }
    )
