from django.core.serializers import serialize
import json

class SerializeMixin(object):
    def serialize(self,qs):
        json_data=serialize('json',qs)
        return json_data