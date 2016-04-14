const http = require('http');
const mocha = require('mocha');
const chai = require('chai');

const server = module.exports =  http.createServer((req, res) => {

  if (req.url === '/time') {
    var now = new Data().toString();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(now);
    return res.end();
  }

  var url = req.url.toString();
  var name = url.substring(7);

  if(req.url === url && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('howdy' + name);
    return res.end();
  });
    return;

  if(req.url === '/greet' && req.method === 'Post') {
    var parsed = '';
    req.on('data', function(data) {
      parsed = JSON.parse(data);
    });

    res.writeHead(200, {'Content-Type': 'application/JSON'});
    res.write(parsed.name);
    return res.end();
  });
    return;
}
//if it gets to here then it is a 404
    res.writeHead(404, {'Content-Type': 'text/plain' });
    res.write('this be a 404 msg, yo')
    return res.end();
});
    return;

server.listen(3000, () => process.stdout.write('server up on 3000'))

});
