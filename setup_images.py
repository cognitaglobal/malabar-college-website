import os
import shutil

src = r"C:\Users\SAFWAN\.gemini\antigravity\brain\a810dce9-c435-42f2-8b8c-44b1774e24d4"
dst = r"c:\Dev\itinaduvannur\assets\images"

os.makedirs(dst, exist_ok=True)

files = {
    "media__1781502748628.jpg": "logo-rutronix.jpg",
    "media__1781502759345.jpg": "logo-malabar.jpg",
    "media__1781502764781.png": "logo-iti.png",
    "media__1781502774382.jpg": "logo-cdit.jpg",
}

for src_name, dst_name in files.items():
    s = os.path.join(src, src_name)
    d = os.path.join(dst, dst_name)
    shutil.copy2(s, d)
    print(f"Copied: {src_name} -> {dst_name}")

print("Done!")
print(os.listdir(dst))
