import * as TodoAPI from "../api/todos.api";
import {useFetchTodos} from "./useFetchTodos";
import {useState} from "react";

export const useRemoveTodo = () => {

    const deleteTodo = async (id) => {
        try {
            const body = {id};
            const response = await TodoAPI.removeTodo(body);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
        // window.location = "/";
    };
    return {deleteTodo};
};
