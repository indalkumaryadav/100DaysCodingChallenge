from django.db import models

# Abstract base model in heritance

class ModelInfo(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    class Meta:
        abstract=True

class Student(ModelInfo):
    roll=models.IntegerField()
    subject=models.CharField(max_length=100)

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