import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

files = {
    "media__1781591664973.jpg": "logo-malabar.jpg",
    "media__1781591672162.png": "logo-sms.png",
    "media__1781591686145.png": "logo-cognita.png"
}

for src, dest in files.items():
    src_path = os.path.join(source_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    try:
        shutil.copy(src_path, dest_path)
        print(f"Successfully copied {src} to {dest}")
    except Exception as e:
        print(f"Failed to copy {src}: {e}")
