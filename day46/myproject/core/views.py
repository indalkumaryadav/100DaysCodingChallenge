from django.shortcuts import render

# Create your views here.
import stripe
stripe.api_key = "sk_test_51IFxoFKcF6RE35QEvWuimmlzUKXh5E3t2xy58tHRWbuAlS11KndOKak6b6XpzbsLG8UwkK4Ytua4A1m1uiA6M0p400WOLZM5WP"



def test_payment(request):
    charge = stripe.Charge.create(
        amount=2000,
        currency="inr",
        description="My First Test Charge (created for API docs)",
        source="tok_visa", # obtained with Stripe.js
        idempotency_key='NesOOCicE8L0WreZ'
    )