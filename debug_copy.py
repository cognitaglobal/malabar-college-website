import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

sms_src = os.path.join(source_dir, "media__1781593048204.jpg")
cognita_src = os.path.join(source_dir, "media__1781593048163.png")

try:
    shutil.copy2(sms_src, os.path.join(dest_dir, "logo-sms.png"))
    print("SMS logo copied")
except Exception as e:
    print(f"SMS Copy Error: {e}")

try:
    shutil.copy2(cognita_src, os.path.join(dest_dir, "logo-cognita.png"))
    print("Cognita logo copied")
except Exception as e:
    print(f"Cognita Copy Error: {e}")

print("Directory Contents:")
print(os.listdir(dest_dir))
