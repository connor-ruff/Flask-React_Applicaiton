from flask import Flask
from flask import request
from flask_cors import CORS
from food_library import _food_database
import json

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
fdb = _food_database()
fdb.load_structs()

@app.route('/', methods=['GET'])
def home():
    output = {}
    output['result'] = 'success'
    return json.dumps(output)


@app.route('/foods/', methods=['POST'])
def food():
    output = {'result':'success'}

    data = request.get_json()

    try:
        listofFoods = fdb.get_all_food_ids()

        for nutrient in data['data']:
           
            if nutrient['operand'] == 'lt':
                listofFoods = fdb.get_less_than(listofFoods, str(nutrient['id']), nutrient['amount'])
            elif nutrient['operand'] == 'gt':
                listofFoods = fdb.get_greater_than(listofFoods, str(nutrient['id']), nutrient['amount'])
            elif nutrient['operand'] =='eq':
                listofFoods = fdb.get_equal_to(listofFoods, str(nutrient['id']), nutrient['amount'])

        
        output['data'] = []
        for ID in listofFoods:
            output['data'].append(fdb.get_food_structure(ID))


    except Exception as e:
        print(str(e))
        output['result'] = 'failure'
        output['message'] = str(e)

    return json.dumps(output)

    

app.run()


