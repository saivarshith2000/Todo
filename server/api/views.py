from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_400_BAD_REQUEST
from .models import Todo
from datetime import datetime

class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

@api_view(['POST'])
@csrf_exempt
def complete_todo(request):
    id = request.data['id']
    try:
        todo = Todo.objects.get(id=id)
        todo.completed = True
        todo.completedAt = datetime.now()
        todo.save()
        return Response("success")
    except Todo.DoesNotExist:
        return Response("Todo Not found", status=HTTP_400_BAD_REQUEST)