import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

# Based on the latest uploads in the brain folder
# media__1781590367858.jpg is likely SMS
# media__1781590382661.png is likely Cognita

shutil.copy(os.path.join(source_dir, "media__1781590367858.jpg"), os.path.join(dest_dir, "logo-sms.jpg"))
shutil.copy(os.path.join(source_dir, "media__1781590382661.png"), os.path.join(dest_dir, "logo-cognita.png"))

print("Logos copied successfully.")
