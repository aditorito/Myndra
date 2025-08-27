from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from otp_utils import generate_otp, save_otp, verify_otp
from twilio_utils import send_sms  # you already have Twilio setup

router = APIRouter()

# Request models
class LoginRequest(BaseModel):
    phone: str
    email: str

class VerifyRequest(BaseModel):
    phone: str
    otp: str

# Step 1: Login -> send OTP
@router.post("/login")
def login(request: LoginRequest):
    otp = generate_otp()
    save_otp(request.phone, otp)

    # Send OTP to phone
    send_sms(request.phone, f"Your OTP is {otp}")

    return {"message": "OTP sent successfully"}

# Step 2: Verify OTP
@router.post("/verify")
def verify(request: VerifyRequest):
    if verify_otp(request.phone, request.otp):
        return {"message": "OTP verified, login successful"}
    else:
        raise HTTPException(status_code=400, detail="Invalid OTP")
