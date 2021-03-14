import { TodoController } from "../../interfaces/controllers/TodoController";
import express from "express";

const router = express.Router();

router.get("/todos", TodoController.fetch);

export default router;
