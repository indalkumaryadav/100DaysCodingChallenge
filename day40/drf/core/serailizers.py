from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.Serializer):
    name=serializers.CharField(max_length=100)
    age=serializers.IntegerField()
    salery=serializers.FloatField()

#   Field label Validation 
    def validate_name(self,value):
        if value<5:
            raise serializers.ValidationError("you should write more letter ")
        return value
    
    # object label validation 
    def validate(self,data):
        name=data.get('name')
        age=date.get('age')
        salery=data.get('salery')
        if salery<5000:
            raise serializers.ValidationError("salery is greater then 5000")
        return data


    def create(self,validated_data):
        return Employee.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name=validated_data.get('name',instance.name)
        instance.age=validated_data.get('age',instance.age)
        instance.salery=validated_data.get('salery',instance.salery)
        instance.save()
        return instance
        
