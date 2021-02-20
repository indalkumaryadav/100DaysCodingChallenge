import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
import django
django.setup()
from core.models import Employee
from faker import Faker


def populate_data(n):
    fake=Faker()
    for i in range(n):
        name=fake.name()
        email=fake.email()
        city=fake.city()
        address=fake.address()
        emp = Employee.objects.get_or_create(
                                                name=name,
                                                email=email,
                                                city=city,
                                                address=address
                                                                )
    
populate_data(50)

# fake.random
# print(fake.random_element(elements=(
#     "Indal ",
#     "Kumar",
#     "yadav"
# )))

# for i in range(10):
#     name=fake.name()
#     city=fake.city
#     address=fake.address()
#     email=fake.email()
#     print(email)
    # phone_no=fake.

# for i in range(10):
#     print(fake.profile())