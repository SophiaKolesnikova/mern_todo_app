import axios from "axios";

const API_BASE = "http://localhost:5000";

const token = window?.localStorage.getItem('authToken');

if (token !== null && token.length) {
    axios.defaults.headers.common.Authorization = `Token ${JSON.parse(token)}`;
}

const CancelToken = axios.CancelToken;
export let cancel;

const get = (path, params) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "get",
        url: `${API_BASE}/${path}`,
        params,
        cancelToken: new CancelToken(function executor(canceler) {
            cancel = canceler;
        })
    });
};

const put = (path, body) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "put",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

const post = (path, body) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

const patch = (path, body) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "patch",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

const deleted = (path, body) => {
    return axios({
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
        url: `${API_BASE}/${path}`,
        data: body ? JSON.stringify(body) : undefined
    });
};

export default {
    GET: get,
    PUT: put,
    POST: post,
    PATCH: patch,
    DELETE: deleted
};