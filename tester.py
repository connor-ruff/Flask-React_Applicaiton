import json
import requests
import sys


def main():

    URL = 'http://127.0.0.1:5000/foods/'

    m = {}
    m['index1'] = 'value1'
    m['index2'] = 'value2'
    

    r = requests.put(URL, data=m)
    resp = json.loads(r.content.decode())
    print(type(resp))

if __name__ == '__main__':
    main()
