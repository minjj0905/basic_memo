from rest_framework import generics
from rest_framework.response import Response
from .models import Memo
from .serializers import MemoSerializer

from rest_framework.decorators import api_view

class MemoList(generics.ListCreateAPIView):
  queryset = Memo.objects.all().order_by('-created_at',)
  serializer_class = MemoSerializer

  def get(self, request, *args, **kwargs):
    queryset = self.filter_queryset(self.get_queryset())
    serializer = self.get_serializer(queryset, many=True)

    keyword = request.query_params.get('keyword', None)

    if keyword is not None:
      queryset = queryset.filter(content__contains=keyword)

    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)

  def post(self, request, *args, **kwargs):
    return self.create(request, *args, **kwargs)

class MemoDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Memo.objects.all()
  serializer_class = MemoSerializer
