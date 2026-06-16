import { Router } from "express";
import {
    addTodo,
    destroyTodo,
    editTodo,
    getAllTodos,
    getSingleTodo,
    searchTodos,
    updateStatus
} from "../controllers/todoController.js";



const router = Router();

router.get("/", getAllTodos);

router.get("/search", searchTodos);

router.get("/:id", getSingleTodo);

router.post("/", addTodo);

router.put("/:id", editTodo);

router.patch("/:id/status", updateStatus);

router.delete("/:id", destroyTodo);

export default router;
