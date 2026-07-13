import shutil
import os

source_dir = r"C:\Users\SAFWAN\.gemini\antigravity\brain\93a42ce4-efb7-4e15-b9b4-302e94c7cfe2"
dest_dir = r"c:\Dev\itinaduvannur\assets\images"

# SMS Logo - latest from previous list_dir
sms_src = "media__1781591672162.png" 
# Cognita Logo - latest
cognita_src = "media__1781591686145.png"

for filename, target in [(sms_src, "logo-sms.png"), (cognita_src, "logo-cognita.png")]:
    src = os.path.join(source_dir, filename)
    dst = os.path.join(dest_dir, target)
    if os.path.exists(src):
        shutil.copy(src, dst)
        print(f"Copied {filename} to {target}")
    else:
        print(f"ERROR: {filename} not found in source")

print("Listing destination directory:")
print(os.listdir(dest_dir))
