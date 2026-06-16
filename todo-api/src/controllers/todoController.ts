import {getTodos, getTodo, createTodo, updateTodo, deleteTodo, searchTodo, changeStatus} from "../models/todoModel.js";

import { Request, Response } from "express";

export async function getAllTodos(req: Request, res: Response) {
    try {
        const data = await getTodos();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}

export async function getSingleTodo(req: Request,res: Response) {
    try {
        const id = +(req.params.id);

        const data = await getTodo(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: "Error"
        });
    }
}

export async function addTodo(req: Request, res: Response) {
    try {
        const result = await createTodo(req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}

export async function editTodo(req: Request, res: Response) {
    try {
        const id = +(req.params.id);

        const result = await updateTodo(id, req.body);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}

export async function destroyTodo(req: Request, res: Response) {
    try {
        const id = +(req.params.id);

        const result = await deleteTodo(id);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}

export async function searchTodos(req: Request, res: Response) {
    try {
        const qes = String(req.query.qes);

        const result = await searchTodo(qes);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}

export async function updateStatus(req: Request, res: Response) {
    try {
        const id = +(req.params.id);

        const { status } = req.body;

        const result = await changeStatus(id, status);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: " Error"
        });
    }
}