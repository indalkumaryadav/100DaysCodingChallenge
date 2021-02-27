import re


pattern=re.compile("l")

matcher=pattern.finditer("Hello Indal How are you indal indal are you there")

for match in matcher:
    print(match.start())
    print(match.end())
    print(match.group())