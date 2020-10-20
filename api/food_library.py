
import json

class _food_database:

    def __init__(self):
        self.daddyJSON = dict()

    # Re-Load CSV Data To be addressable by food ID
    def load_structs(self, food_csv='food_data.json'):
        with open(food_csv) as f:
            fullJSON = json.load(f)

        for entry in fullJSON['report']['foods']:
            self.daddyJSON[entry['ndbno']] = dict()
            self.daddyJSON[entry['ndbno']]['Name'] = entry['name']
            self.daddyJSON[entry['ndbno']]['Measure'] = entry['measure']
            self.daddyJSON[entry['ndbno']]['Nutrients'] = dict()
            
            for nut in entry['nutrients']:
                self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']] = dict()
                self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']]['NutrientName'] = nut['nutrient']
                self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']]['NutrientUnits'] = nut['unit']
                if nut['value'] == '--':
                    self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']]['NutrientValue'] = float(0.0)
                else:
                    self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']]['NutrientValue'] = float(nut['value'])

                self.daddyJSON[entry['ndbno']]['Nutrients'][nut['nutrient_id']]['NutrientGM'] = nut['gm']

    def get_all_food_ids(self):
        result = []
        for stringy in self.daddyJSON.keys():
            result.append(str(stringy))
        return result




    # Return all food ID's that are over a threshold for a certain nutrient
    def get_greater_than(self, foodsToSearch, nutrientID, threshold):
        
        result = []
        for entry in foodsToSearch:
            if (self.daddyJSON[entry]['Nutrients'][nutrientID]['NutrientValue']) > threshold:
                #print(self.daddyJSON[entry]['Nutrients'][nutrientID]['NutrientValue'])
                result.append(entry)

        return result



   
    # Return all food ID's that are under a threshold for a certain nutrient
    def get_less_than(self, foodsToSearch, nutrientID, threshold):
        
        result = []
        for entry in foodsToSearch:
            if (self.daddyJSON[entry]['Nutrients'][nutrientID]['NutrientValue']) < threshold:
                #print(self.daddyJSON[entry]['Nutrients'][nutrientID]['NutrientValue'])
                result.append(entry)

        return result


                


if __name__ == '__main__':

    fobj = _food_database()
    fobj.load_structs('food_data.json')

