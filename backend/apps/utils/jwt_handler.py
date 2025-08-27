import jwt
from datetime import datetime, timedelta
from ..config import JWT_SECRET, JWT_ALGO

def create_jwt(user_id: str):
    payload = {
        "sub": user_id,
        "exp": datetime.utcnow() + timedelta(days=7)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGO)
