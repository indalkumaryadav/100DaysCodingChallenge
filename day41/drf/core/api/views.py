from .serializers import EmployeeSerializer
from core.models import Employee
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView,ListCreateAPIView,RetrieveUpdateAPIView,RetrieveUpdateDestroyAPIView,RetrieveDestroyAPIView
from rest_framework import mixins

# class EmployeeAPIView(APIView):
    
#     def get(self,request,format=None):
#         qs=Employee.objects.all()
#         serializer=EmployeeSerializer(qs,many=True)
#         return Response(serializer.data)



class EmployeeAPIView(ListAPIView):
    # queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
    
    def get_queryset(self):
        qs=Employee.objects.all()
        name=self.request.GET.get("ename")
        if name is not None:
            qs=qs.filter(ename__icontains=name)
        return qs


class EmployeeCreateAPIView(CreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer


class EmployeeRetrieveAPIView(RetrieveAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
    lookup_field="ename"

class EmployeeUpdateAPIView(UpdateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmployeeDestroyAPIView(DestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer


class EmployeeListCreateAPIView(ListCreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmployeeRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmployeeRetrieveDestroyAPIView(RetrieveDestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmployeeRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer



class EmployeeListMixin(mixins.UpdateModelMixin,mixins.DestroyModelMixin,mixins.CreateModelMixin,ListAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
    def post(self,request,*args,**kwargs):
        return self.create(self,request,*args,**kwargs)
    
    def delete(self,request,*args,**kwargs):
        return self.destroy(self,request,*args,**kwargs)
    
    def put(self,request,*args,**kwargs):
        return self.update(self,request,*args,**kwargs)
        
    def patch(self,request,*args,**kwargs):
        return self.partial_update(self,request,*args,**kwargs)