import axios from "../utils/axios";

export const getTodos = async () => {
    return axios.GET("todos");
};

export const addTodo = async (body) => {
    return axios.POST("todos", body);
};

export const updateTodo = async (body) => {
    return axios.PUT(`todos/${body.todo_id}`, body);
};

export const removeTodo = async (body) => {
    return axios.DELETE(`todos/${body.todo_id}`);
};