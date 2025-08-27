# backend/app/twilio_utils.py
from twilio.rest import Client
from config import TWILIO_SID, TWILIO_AUTH, TWILIO_FROM

client = Client(TWILIO_SID, TWILIO_AUTH)

def send_sms(to: str, message: str):
    client.messages.create(
        body=message,
        from_=TWILIO_FROM,
        to=to
    )
