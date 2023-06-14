from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import APISerializer
from .models import Tasks

from .apis import api

# Create your views here.
@api_view(['GET'])
def datalist(request):
    api_data = Tasks.objects.all()
    serializer = APISerializer(api_data, many=True)
    tasks = api.as_view()

    return Response(result)
