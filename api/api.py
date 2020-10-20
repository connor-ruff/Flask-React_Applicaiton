from flask import Flask
from flask import request
from food_library import _food_database
import json

app = Flask(__name__)
app.config["DEBUG"] = True
fdb = _food_database()
fdb.load_structs()

@app.route('/', methods=['GET'])
def home():
    return 'ok'


@app.route('/foods/', methods=['PUT'])
def food():
    output = {}
    try:
        data = request.form
        output = data.to_dict()
    except Exception as e:
        output['result'] = 'failure'
        output['message'] = str(e)

    return json.dumps(output)

    

app.run()


