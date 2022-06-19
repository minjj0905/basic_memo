from rest_framework import serializers
from . import models

class MemoSerializer(serializers.ModelSerializer):

  class Meta:
    fields = ('id', 'title', 'content', 'created_at', 'updated_at',)
    model = models.Memo