from django.db import models

class Memo(models.Model):
  title = models.CharField(max_length=50, blank=True)
  content = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title 