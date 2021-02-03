from django.shortcuts import render
import stripe
from rest_framework.decorators import api_view 
from django.http import HttpResponse

@api_view(['POST'])
def test_payment(request):
    stripe.api_key = "sk_test_51IFxoFKcF6RE35QEvWuimmlzUKXh5E3t2xy58tHRWbuAlS11KndOKak6b6XpzbsLG8UwkK4Ytua4A1m1uiA6M0p400WOLZM5WP"
    charge = stripe.Charge.create(
        amount=2000,
        currency="inr",
    )
    return HttpResponse(charge,"application/json",status=200)