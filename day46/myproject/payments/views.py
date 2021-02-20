from django.shortcuts import render
import stripe
from rest_framework.decorators import api_view 
from django.http import HttpResponse
from rest_framework.response import Response
import io
@api_view(['POST'])
def test_payment(request):
    
    stripe.Customer.create(
    email="personal@gmail.com",
    api_key="sk_test_51IFxoFKcF6RE35QEvWuimmlzUKXh5E3t2xy58tHRWbuAlS11KndOKak6b6XpzbsLG8UwkK4Ytua4A1m1uiA6M0p400WOLZM5WP"
    )
    charge = stripe.Charge.create(
    amount=20,
    currency="inr",
    description="My First Test Charge (created for API docs)",
    source="tok_visa", # obtained with Stripe.js
    idempotency_key='0giIqIjAhgSTBk1c'
    )
    return Response(status=200)

# def charge_user(token, email):
#   stripe_customer = anvil.stripe.new_customer(email, token)
#   stripe_customer.charge(amount=999, currency="USD")
     
    # 
