import { FetchTodos } from "../../application/usecases/Todo/fetchTodos";

export class TodoController {
  constructor() {}

  static fetch(req: any, res: any) {
    const fetchTodos = new FetchTodos();
    const result = fetchTodos.fetchTodos();
    res.json(result);
  }
}
