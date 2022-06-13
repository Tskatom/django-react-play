from django.db import models
from real_estate.settings.base import AUTH_USER_MODEL
from apps.common.models import TimeStampedUUIDModel
from apps.profiles.models import Profile

# Create your models here.
class Rating(TimeStampedUUIDModel):
    
    class Range(models.IntegerChoices):
        RATING_1 = 1, "Poor"
        RATING_2 = 2, "Fair"
        RATING_3 = 3, "Good"
        RATING_4 = 4, "Very Good"
        RATING_5 = 5, "Excellent"
    
    rater = models.ForeignKey(AUTH_USER_MODEL, 
        verbose_name="User providing the rating", on_delete=models.SET_NULL, null=True)
    agent = models.ForeignKey(Profile, verbose_name="Agent being rated",
        related_name='agent_review',
        on_delete=models.SET_NULL, null=True)
    rating = models.IntegerField(verbose_name="Rating", choices=Range.choices, default=0)
    comment = models.TextField(verbose_name="Comments")

    class Meta:
        unique_together = ['rater', 'agent']
    
    def __str__(self):
        return f"{self.agent} rated at {self.rating}"

