from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    email: EmailStr
    phone: str
    password: str

class OTPVerify(BaseModel):
    phone: str
    otp: str
