import { TodoController } from "../controllers/TodoController/TodoController";
import express from "express";

const router = express.Router();

router.get("/todos", TodoController.index);

export default router;