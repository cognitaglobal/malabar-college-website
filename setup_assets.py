import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

# Map of source files to target names
mapping = {
    "cognita_logo_1781589134958.png": "logo-cognita.png",
    "sms_logo_1781589151032.png": "logo-sms.png"
}

for src, dest in mapping.items():
    src_path = os.path.join(source_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src} to {dest}")
    else:
        print(f"Source {src} not found")
