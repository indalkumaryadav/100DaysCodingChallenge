from django.shortcuts import render
import razorpay
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OrderSerializer
@api_view(['POST'])
def payment_api(request):
    amount = request.data['amount']
    name = request.data['name']

    client = razorpay.Client(("<YOUR_API_KEY>", "<YOUR_API_SECRET>"))
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

    client = razorpay.Client(("<YOUR_API_KEY>", "<YOUR_API_SECRET>"))
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