import axios from "../utils/axios";

export const getTodos = async () => {
    return axios.GET("todos");
};

export const getTodo = async (body) => {
    return axios.GET(`todos/${body.id}`, body);
};

export const addTodo = async (body) => {
    return axios.POST("todos", body);
};

export const updateTodo = async (body) => {
    return axios.PUT(`todos/${body.id}`, body);
};

export const removeTodo = async (body) => {
    return axios.DELETE(`todos/${body.id}`, body);
};