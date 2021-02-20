import requests
import json

# # API="http://127.0.0.1:8000/"
# # ENDPOINT=""

# # res=requests.post(API+ENDPOINT,{
# #     'msg':'indal'
# # })

# def f1(*args):
#     print(args)

# def f2(**kwargs):
#     print(kwargs)

# f2(name='indal',age=20)
url="http://127.0.0.1:8000/"

def get_data():
    req=requests.get(url)
    print(req)
    
get_data()