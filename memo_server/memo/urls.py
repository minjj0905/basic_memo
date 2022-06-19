from django.urls import path
from . import views

urlpatterns = [
    path('memo', views.MemoList.as_view()),
    path('memo/<int:pk>/', views.MemoDetail.as_view())
]
