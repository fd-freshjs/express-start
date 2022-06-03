const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url === '/workspaces') {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('OK');
    return;
  }

  if (req.method === 'GET' && req.url.includes('/workspaces/')) {
    const id = req.url.split('/')[2];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('DELETED ' + id);
    return;
  }

  res.end('404');
});

// http://localhost:5000
server.listen(5000);
