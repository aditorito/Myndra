from fastapi import FastAPI, HTTPException
from email_utils import send_email
from routes import auth  # import your auth routes

app = FastAPI()
app.include_router(auth.router, prefix="/auth", tags=["Auth"])

# fake OTP storage for example
otp_store = {"user@example.com": "123456"}

@app.post("/verify-otp/")
def verify_otp(email: str, otp: str):
    if otp_store.get(email) == otp:
        # OTP matched, send welcome email
        subject = "🎉 Welcome to Myndra!"
        body = f"Hi {email},\n\nYour OTP has been verified successfully. Welcome aboard! 🚀"
        send_email(email, subject, body)
        return {"message": "OTP verified and welcome email sent."}
    else:
        raise HTTPException(status_code=400, detail="Invalid OTP")
