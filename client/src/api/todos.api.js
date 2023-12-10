import axios from "../utils/axios";

export const getTodos = async () => {
    return axios.GET("todos");
};

export const getTodo = async () => {
    return axios.GET("todos/:id");
};

export const addTodo = async (body) => {
    return axios.POST("todos", body);
};

export const updateTodo = async () => {
    return axios.PUT("todos/:id");
};

export const removeTodo = async () => {
    return axios.DELETE("todos/:id");
};