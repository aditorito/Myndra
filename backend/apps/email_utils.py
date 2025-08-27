import smtplib
from email.mime.text import MIMEText
from config import EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_FROM

def send_email(to_email: str, subject: str, body: str):
    msg = MIMEText(body, "plain")
    msg["Subject"] = subject
    msg["From"] = EMAIL_FROM
    msg["To"] = to_email

    with smtplib.SMTP(EMAIL_HOST, 587) as server:
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.sendmail(EMAIL_FROM, [to_email], msg.as_string())
