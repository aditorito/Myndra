from pymongo import MongoClient
from .config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client["authdb"]

users_collection = db["users"]
otp_collection = db["otps"]
