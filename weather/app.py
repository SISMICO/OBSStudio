from flask import Flask
from flask import jsonify
from flask import request, make_response
import requests

from logging.config import dictConfig

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})

app = Flask(__name__)

@app.route('/weather', methods=['OPTIONS','GET'])
def startup():
    #SOURCE_URL = 'https://api.tempoagora.com.br/weather?city=SaoPaulo-SP'
    SOURCE_URL = 'https://tempoagora.uol.com.br/json/myclimatempo/user/weatherNow?idlocale=3477'
    if request.method == 'OPTIONS':
        return build_preflight_response()
    else:
        response = http_get(SOURCE_URL).json()
        app.logger.info('Response data %s', response['data']['getWeatherNow'][0]['data'][0])
        return build_actual_response(response['data']['getWeatherNow'][0]['data'][0]['weather']['temperature'])

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
