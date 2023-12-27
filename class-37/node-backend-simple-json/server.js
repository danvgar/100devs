const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  function readWriteFile(pathStr, contentTypeStr) {
    // pathStr must be the path of the file, for example 'index.html'
    // contentTypeStr must be the content-type to parse the file as, for example text/html, text/javascript, 
    fs.readFile(pathStr, function (err, data) {
      res.writeHead(200, { 'Content-Type': contentTypeStr });
      res.write(data);
      res.end();
    });
  }

  switch (page) {
    case "/":
      readWriteFile('index.html', 'text/html')
      break;

    case '/otherpage':
      readWriteFile('otherpage.html', 'text/html')
      break;

    case '/otherotherpage':
      readWriteFile('otherotherpage.html', 'text/html')
      break;

    case '/api':
      if ('student' in params) {
        if (params['student'] === 'leon') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          const objToJson = {
            name: "leon",
            status: "Boss Man",
            currentOccupation: "Baller"
          }
          res.end(JSON.stringify(objToJson));
        }//student = leon

        else if (params['student'] !== 'leon') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          const objToJson = {
            name: "unknown",
            status: "unknown",
            currentOccupation: "unknown"
          }
          res.end(JSON.stringify(objToJson));
        }//student !== leon
      }//student if
      break;

    case '/css/style.css':
      fs.readFile('css/style.css', function (err, data) {
        res.write(data);
        res.end();
      });
      break;

    case '/js/main.js':
      readWriteFile('js/main.js', 'text/javascript')
      break;

    default: {
      figlet('404!!', function (err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
    }
  }
});

server.listen(8000);
