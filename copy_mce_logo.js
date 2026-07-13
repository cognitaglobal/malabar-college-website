const fs = require('fs');
const src = 'C:/Users/SAFWAN/.gemini/antigravity/brain/4f65b34a-6b41-4eb2-8186-9ab283ae9e11/mce_logo_generated_1783663785918.png';
const dst = 'c:/Dev/itinaduvannur/assets/images/mce-logo.png';
const dstWhite = 'c:/Dev/itinaduvannur/assets/images/mce-logo-white.png';
try {
    fs.copyFileSync(src, dst);
    console.log('Copied mce-logo.png, size:', fs.statSync(dst).size);
    // Also copy same logo as white variant (footer will show on dark bg)
    fs.copyFileSync(src, dstWhite);
    console.log('Copied mce-logo-white.png, size:', fs.statSync(dstWhite).size);
} catch (e) {
    console.error('Copy failed:', e.message);
}
