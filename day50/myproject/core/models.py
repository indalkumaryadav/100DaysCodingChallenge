from django.db import models

# Abstract base model in heritance

class Manager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().order_by("-id")
    
    def name_age(self,name,age):
        return super().get_queryset().filter(name=name,age=age)
    
    def std_shoted_by(self,param):
        return super().get_queryset().order_by(param)
    
    # stde=Student.objects.name_age()
    # stde=Student.objects.std_shoted_by("name")

class ModelInfo(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    class Meta:
        abstract=True

class Student(ModelInfo):
    roll=models.IntegerField()
    subject=models.CharField(max_length=100)
    my_objects=Manager()

class Teacher(ModelInfo):
    teaching_subject=models.CharField(max_length=100)
    salery=models.IntegerField()


# Multiple inheritance

class ModelInfo1(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
  
class Student1(ModelInfo):
    roll=models.IntegerField()
    subject=models.CharField(max_length=100)

class Teacher1(ModelInfo):
    teaching_subject=models.CharField(max_length=100)
    salery=models.IntegerField()

# MiltiLavel Inheritance

class Parent(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
  
class Child(Parent):
    roll=models.IntegerField()
    subject=models.CharField(max_length=100)

class SubChild(Child):
    teaching_subject=models.CharField(max_length=100)
    salery=models.IntegerField()



# Proxy Model Inheritance
# class ProxyModel(Student):
#     class Meta:
#         proxy=True