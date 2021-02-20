from django import template

register=template.Library()


@register.filter(name="indal")
def lastWord(value,element):
    result=value[:(value)-element]
    return result


# register.filter("indal",lastWord)