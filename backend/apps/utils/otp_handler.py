import random
from datetime import datetime, timedelta
from ..database import otp_collection

OTP_TTL = 300  # 5 minutes

def generate_otp(phone: str):
    otp_code = str(random.randint(100000, 999999))
    expires_at = datetime.utcnow() + timedelta(seconds=OTP_TTL)
    otp_collection.insert_one({
        "phone": phone,
        "otp": otp_code,
        "expires_at": expires_at,
        "used": False
    })
    return otp_code

def verify_otp(phone: str, otp: str):
    record = otp_collection.find_one({"phone": phone, "otp": otp, "used": False})
    if not record or record["expires_at"] < datetime.utcnow():
        return False
    otp_collection.update_one({"_id": record["_id"]}, {"$set": {"used": True}})
    return True
