import http from 'http';
import { TodoListService } from './todolist-service.mjs';

const todoListService = new TodoListService();
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    todoListService.getTodoList(req, res);
  } else if (req.method === 'POST') {
    todoListService.createTodoList(req, res);
  }
});

server.listen(3000);
