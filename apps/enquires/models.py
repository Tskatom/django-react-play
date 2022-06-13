from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from apps.common.models import TimeStampedUUIDModel

# Create your models here.
class Enquiry(TimeStampedUUIDModel):
    name = models.CharField(
        verbose_name=_("Your name"), max_length=100
    )
    phone_number = PhoneNumberField(_("phone number"), max_length=30, default="+154988761233")
    email = models.EmailField(_("Email"))
    subject = models.CharField(_("Subject"), max_length=100)
    message = models.TextField(_("Message"))

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name_plural = "Enquiries"
