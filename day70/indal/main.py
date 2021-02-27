import re

pattern=re.compile("python")
# print(type(pattern))
matcher=pattern.finditer("Hello Python is my Favorite language python is most powerfull")