from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    addedAt = models.DateTimeField(auto_now_add=True)
    completedAt = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)