import * as TodoAPI from "../api/todos.api";
import {useAddTodo} from "./addTodo";


export const useUpdateTodo = () => {
    const {description} = useAddTodo();

    const editTodo = async (id) => {
        try {
            const body = {description, id};
            const response = await TodoAPI.updateTodo(body);
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
        window.location = "/";
    };
    return {editTodo};
};
