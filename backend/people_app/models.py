from django.db import models

class People(models.Model):
    name = models.CharField(max_length=50)
    birthdate = models.DateField()
    favorite_color = models.CharField(max_length=25)

    def __str__(self):
        return f"{self.name}"
