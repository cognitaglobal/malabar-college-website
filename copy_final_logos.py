import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

# SMS Logo (Cloud)
shutil.copy(os.path.join(source_dir, "media__1781592471173.jpg"), os.path.join(dest_dir, "logo-sms.png"))
# Cognita Logo (Circle)
shutil.copy(os.path.join(source_dir, "media__1781592471269.png"), os.path.join(dest_dir, "logo-cognita.png"))

print("Logos copied successfully.")
