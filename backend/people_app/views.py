from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *

class PeopleViewSet(ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
