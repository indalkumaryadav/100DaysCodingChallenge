import requests
import os
from html.parser import HTMLParser

# api="https://jsonplaceholder.typicode.com/posts"

# get_data=requests.get(api);

# print(get_data.json())

# def postData(data):
#     requests.post(api,data)


# con=psycopg2.connect(
#     'NAME':'TodoDataBase',
#     'HOST':'localhost',
#     'USER':'postgres',
#     'PASSWORD':'indal',
# )


# con.close()

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Found a start tag:", tag)

    def handle_endtag(self, tag):
        print("Found an end tag :", tag)

    def handle_data(self, data):
        print("Found some data  :", data)

parser = MyHTMLParser()
parser.feed('<title>JournalDev HTMLParser</title>'
            '<h1>Python html.parse module</h1>')