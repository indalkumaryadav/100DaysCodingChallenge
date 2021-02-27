import re

matcher=re.finditer("/d","a7bkz@")
for m in matcher:
    print(m.start()," ...",m.group())