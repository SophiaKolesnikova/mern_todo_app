import * as TodoAPI from "../api/todos.api";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";


export const useFetchTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const {isLoading, data: todos} = useQuery('todos', TodoAPI.getTodos)

   const fetchTodos = async () => {
       try {
           setError('');
           setLoading(true);
           const response = await TodoAPI.getTodos();
           setTodos(response.data);
           setLoading(false);
       } catch (err) {
           const error = err;
           setLoading(false);
           setError(error.message);
       }
   };

    useEffect(() => {
        fetchTodos();
    }, []);

   return {todos, error, loading};
};