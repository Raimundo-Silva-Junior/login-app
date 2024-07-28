from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
from datetime import datetime

class UserProfile(models.Model):
    
    id = models.UUIDField(default=uuid4, primary_key=True, unique=True, editable=False)
    user = models.OneToOneField(User, related_name="profile", editable=False, on_delete=models.CASCADE)
    online_status = models.BooleanField(default=False)
    
    def __str__(self):
        return self.user.username
    
class Group(models.Model):
    
    id = models.UUIDField(default=uuid4, primary_key=True, unique=True, editable=False)
    #name = models.CharField(max_length=200)
    members = models.ManyToManyField(User, related_name="group_user")
    owner = models.ForeignKey(User, related_name="owner_user", on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now)
    members_online = models.IntegerField(default=0)
    
    def __str__(self):
        return f"Owner: {self.owner.username} - ID {self.id} - Date: {self.date.strftime("%d/%m/%Y, %H:%M:%S")}"
    
class Message(models.Model):
    
    id = models.UUIDField(default=uuid4, primary_key=True, unique=True, editable=False)
    message = models.TextField()
    group = models.ForeignKey(Group, related_name="group_message", on_delete=models.CASCADE)
    author = models.ForeignKey(User, related_name="user_message", on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now)
    def __str__(self):
        return f"Outhor: {self.author.username} - ID {self.id} - Date: {self.date.strftime("%d/%m/%Y, %H:%M:%S")}"
    
    