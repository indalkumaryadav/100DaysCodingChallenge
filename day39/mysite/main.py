import requests
import json

def get_data(id=None):
    data={}
    if id is not None :
        data={
            'id':id
        }
        res=requests.get(url+id+'/')
    else:
        print('something went wrong')
get_data(0)