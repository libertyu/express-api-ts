export class TodoController {
  constructor() {}
  static index(req: any, res: any) {
    res.json({
      message: "Todoだー",
    });
  }
}
