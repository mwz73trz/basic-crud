import imp
from rest_framework.serializers import ModelSerializer
from .models import *

class PeopleSerializer(ModelSerializer):
    class Meta:
        model = People
        fields = '__all__'