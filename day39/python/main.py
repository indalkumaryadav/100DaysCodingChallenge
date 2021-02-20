import requests
import json

url="http://127.0.0.1:8000/"

ENDPOINT=""

def create_data():
	employee={
	'name':'myen7ame',
	'age':22,
	'salery':5200
	}
	dict_to_json=json.dumps(employee)
	res=requests.post(url,dict_to_json)
	if res.status_code in range(200,300):
		print(res.json())
	print(res.json())

# create_data()

def get_data(id=None):
    data={}
    if id is not None :
        data={
            'id':id
        }
        json_data=json.dumps(data)
        res=requests.get(url,data=json_data)
        print(res.json())
    else:
        res=requests.get(url)
        print(res.json())
# get_data()

def update_data(id):
	data={
	'id':id,
	'name':'hello',
	'age':23,
	'salery':50000
	}
	json_data=json.dumps(data)
	res=requests.put(url,json_data)
	print(res.json())
	

# update_data(8)

def delete_data(id):
	data={
	'id':id
	}
	json_data=json.dumps(data)
	res=requests.delete(url,data=json_data)
	print(res.json())


