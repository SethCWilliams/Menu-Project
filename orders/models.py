from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Order(models.Model):
    # ONE = 1
    # TWO = 2
    # THREE = 3
    # FOUR = 4
    # FIVE = 5
    # SIX = 6
    # SEVEN = 7
    # EIGHT = 8
    # NINE = 9
    # TEN = 10
    # SPICE_CHOICES = ((ONE, 1), (TWO, 2), (THREE, 3), (FOUR, 4), (FIVE, 5), (SIX, 6), (SEVEN, 7), (EIGHT, 8), (NINE, 9), (TEN, 10))
    # user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL())
    item = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=4, decimal_places=1)
    description = models.TextField()
    # spice = models.CharField(
    #     max_length=2,
    #     choices=SPICE_CHOICES,
    #     default=3,
    # )
