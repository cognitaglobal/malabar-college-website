@echo off
echo Creating assets\images folder...
if not exist "assets\images" mkdir "assets\images"

echo Copying logos...
copy /Y "C:\Users\SAFWAN\.gemini\antigravity\brain\a810dce9-c435-42f2-8b8c-44b1774e24d4\media__1781502748628.jpg" "assets\images\logo-rutronix.jpg"
copy /Y "C:\Users\SAFWAN\.gemini\antigravity\brain\a810dce9-c435-42f2-8b8c-44b1774e24d4\media__1781502759345.jpg" "assets\images\logo-malabar.jpg"
copy /Y "C:\Users\SAFWAN\.gemini\antigravity\brain\a810dce9-c435-42f2-8b8c-44b1774e24d4\media__1781502764781.png" "assets\images\logo-iti.png"
copy /Y "C:\Users\SAFWAN\.gemini\antigravity\brain\a810dce9-c435-42f2-8b8c-44b1774e24d4\media__1781502774382.jpg" "assets\images\logo-cdit.jpg"

echo.
echo Done! All logos copied to assets\images\
echo You can now open index.html in your browser.
echo.
pause
