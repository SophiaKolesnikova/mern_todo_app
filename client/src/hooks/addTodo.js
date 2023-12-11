import * as TodoAPI from "../api/todos.api";
import {useState} from "react";

export const useAddTodo = () => {
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addNewTodo = async (e)=> {
        e.preventDefault();
        if (description.trim().length === 0) {
            setError("Please enter valid task.");
            return;
        }
        try {
            setError('');
            setLoading(true);
            const body = {description};
            const response = await TodoAPI.addTodo(body);
            setDescription(response.data);
            setLoading(false);
            setDescription('');
        } catch (err) {
            const error = err;
            setLoading(false);
            setError(error.message);
        }
            window.location = "/";
    };
  return {description, error, addNewTodo, setDescription, loading};
};