from rest_framework import viewsets
from product.models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from .permissons import IsReadOnly

class ProductAPI(viewsets.ModelViewSet):
    serializer_class=ProductSerializer
    queryset=Product.objects.all()
    permission_classes=[IsReadOnly,]
    authentication_classes=[TokenAuthentication,]
