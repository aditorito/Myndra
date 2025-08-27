# backend/app/otp_utils.py
import random
import time

# Temporary in-memory OTP storage { "email/phone": {"otp": "123456", "expires": 1234567890} }
otp_store = {}

def generate_otp():
    """Generate a 6-digit OTP"""
    return str(random.randint(100000, 999999))

def save_otp(identifier: str, otp: str, ttl: int = 300):
    """Save OTP for 5 minutes (default 300 seconds)"""
    otp_store[identifier] = {"otp": otp, "expires": time.time() + ttl}

def verify_otp(identifier: str, otp: str):
    """Check if OTP is valid and not expired"""
    if identifier not in otp_store:
        return False

    record = otp_store[identifier]
    if time.time() > record["expires"]:
        return False

    return record["otp"] == otp
