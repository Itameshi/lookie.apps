from django.db import models

# Create your models here.
class Tasks(models.Model):
    #id = models.AutoField(primary_key=True, verbose_name='ID')
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(verbose_name='投稿日')
