from django.shortcuts import render

# Create your views here.
def product_cart(request):
    return render(request,"carts/carts.html")