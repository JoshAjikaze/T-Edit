from django.db import models

# Create your models here.
class Projects(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    dateAdded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name