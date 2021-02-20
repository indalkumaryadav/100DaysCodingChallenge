from django.shortcuts import render
import razorpay
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order
import json
import io

@api_view(['POST'])
def payment_view(request):
    
    amount = request.POST.get("amount")
    name = request.POST.get("name")
 
    client = razorpay.Client(auth=("rzp_test_EBY8gnqLXnvkoG", "913XFToCWUTp9IS9yo64A1pO"))

    payment = client.order.create({"amount": int(amount) * 100, 
                                   "currency": "INR", 
                                   "payment_capture": "1"})
    
    order = Order.objects.create(order_product=name, 
                                 order_amount=amount, 
                                 order_payment_id=payment['id'])
    serializer = OrderSerializer(order)

    data = {
        "payment": payment,
        "order": serializer.data
    }
    return Response(data)


@api_view(['POST'])
def handle_payment_success(request):
   
    res = json.loads(request.data["response"])

    ord_id = ""
    raz_pay_id = ""
    raz_signature = ""

    # res.keys() will give us list of keys in res
    for key in res.keys():
        if key == 'razorpay_order_id':
            ord_id = res[key]
        elif key == 'razorpay_payment_id':
            raz_pay_id = res[key]
        elif key == 'razorpay_signature':
            raz_signature = res[key]

   
    order = Order.objects.get(order_payment_id=ord_id)

  
    data = {
        'razorpay_order_id': ord_id,
        'razorpay_payment_id': raz_pay_id,
        'razorpay_signature': raz_signature
    }

    client = razorpay.Client(auth=("rzp_test_EBY8gnqLXnvkoG", "913XFToCWUTp9IS9yo64A1pO"))

    check = client.utility.verify_payment_signature(data)

    if check is not None:
        print("Redirect to error url or error page")
        return Response({'error': 'Something went wrong'})

  
    order.isPaid = True
    order.save()

    res_data = {
        'message': 'payment successfully received!'
    }

    return Response(res_data)