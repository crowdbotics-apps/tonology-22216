from django.contrib import admin
from .models import Setting, Profile, Inbox, Dislike, Match, UserPhoto, Like

admin.site.register(Match)
admin.site.register(Inbox)
admin.site.register(Like)
admin.site.register(UserPhoto)
admin.site.register(Setting)
admin.site.register(Profile)
admin.site.register(Dislike)

# Register your models here.
