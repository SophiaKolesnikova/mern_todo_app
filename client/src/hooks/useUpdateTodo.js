import * as TodoAPI from "../api/todos.api";
import {useAddTodo} from "./useAddTodo";
import {useState} from "react";


export const useUpdateTodo = () => {
    const [description, setDescription] = useState('');

    const editTodo = async () => {
        try {
            const body = {description};
            // const response = await TodoAPI.updateTodo(body);
            // console.log(response);
        } catch (err) {
            console.log(err.message);
        }
        // window.location = "/";
    };
    return {editTodo};
};
