import pool from "../config/db.js";
import {TodoType} from "../types/todoTypes.js"

export async function getTodos() {
    const [rows] = await pool.query(
        `SELECT * FROM todos ORDER BY id DESC`
    )
    return rows
}

export async function getTodo(id: number) {
    const [rows] = await pool.query(
        "SELECT * FROM todos WHERE id=?",
        [id]
    );

    return rows;
}

export async function createTodo(todo:TodoType ) {
    const { title, description } = todo;

    const [result] = await pool.query(
        `INSERT INTO todos(title,description) VALUES(?,?)`,
        [title, description]
    );

    return result;
}

export async function updateTodo(id: number, todo: TodoType) {
    const { title, description } = todo;

    const [result] = await pool.query(
        `UPDATE todos  SET title=?, description=?  WHERE id=?`,
        [title, description, id]
    );

    return result;
}
export async function deleteTodo(id: number) {
    const [result] = await pool.query(
        "DELETE FROM todos WHERE id=?",
        [id]
    );

    return result;
}

export async function searchTodo(q: string) {
    const [rows] = await pool.query(
        `SELECT *  FROM todos  WHERE title LIKE ?   OR description LIKE ?`, [`%${q}%`, `%${q}%`]
    );

    return rows;
}

export async function changeStatus(id: number, status: string) {
    const [result] = await pool.query(
        `UPDATE todos     SET status=?   WHERE id=?`, [status, id]
    );

    return result;
}