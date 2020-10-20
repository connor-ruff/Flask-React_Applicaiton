import json
import requests
import sys


def main():

    URL = sys.argv[1]

    m = {}
    m['index1'] = 'value1'
    m['index2'] = 'value2'
    r = requests.put(URL, data=json.dumps(m))
    print(r)
if __name__ == '__main__':
    main()
