import React from "react";
import InputAdd from "../InputAdd";
import ListTodos from "../ListTodos";
import { useQuery } from "react-query";
import * as TodoAPI from "../../api/todos.api";

import styles from './index.module.scss';

const App = () => {
    const {isLoading, data: todos} = useQuery('todos',
        () => TodoAPI.getTodos('todos').then((res) => res.data));

    return (
        <div className={styles.app}>
            <h1 className={styles.appTitle}>To Do App</h1>
            <div className={styles.appInput}>
                <InputAdd todos={todos}/>
            </div>
            <div className={styles.appList}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    todos?.map((todo) => (
                        <ListTodos todo={todo} key={todo.todo_id}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default App;
