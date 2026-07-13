const http = require('http');
const fs = require('fs');
const path = require('path');

const root = 'c:\\Dev\\itinaduvannur';

http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0];
    if (urlPath === '/') urlPath = '/index.html';
    const fullPath = path.join(root, urlPath);

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        let contentType = 'text/html';
        const ext = path.extname(fullPath).toLowerCase();
        if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.webp') contentType = 'image/webp';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(fullPath).pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
