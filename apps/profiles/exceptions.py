from rest_framework.exceptions import APIException

class ProfileNotFound(APIException):
    status_code = 404
    default_detail = "The requested profile does not exist"

class NotYourProfile(APIException):
    status = 403
    default_detail = "You can not edit a profile that does not belong to you."