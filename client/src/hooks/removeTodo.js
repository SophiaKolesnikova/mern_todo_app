import * as TodoAPI from "../api/todos.api";
import {useFetchTodos} from "./fetchTodos";
import {useState} from "react";

export const useRemoveTodo = () => {
    const {todos, setTodos} = useFetchTodos();

    const deleteTodo = async (id) => {
        try {
            const body = {id};
            const response = await TodoAPI.removeTodo(body);
            console.log(response.data);
            setTodos(todos.filter((todo) => todo.todo_id !== todo));
        } catch (err) {
            console.log(err.message);
        }
        window.location = "/";
    };
    return {deleteTodo};
};
