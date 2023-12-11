import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import "./common.scss";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);

