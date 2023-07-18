export class TodoListService {
  todolist = ['Thomas', 'Alberto'];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.todolist.map((index, value) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodoList(req, res) {
    res.write(this.getJsonTodoList());
    res.end();
  }
}