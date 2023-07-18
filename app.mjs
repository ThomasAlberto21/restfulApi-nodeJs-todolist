import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Todolist App');
  res.end();
});

server.listen(3000);
