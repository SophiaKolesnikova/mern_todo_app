import React from "react";
import InputAdd from "../InputAdd";
import ListTodos from "../ListTodos";
import {useFetchTodos} from "../../hooks/useFetchTodos";
import styles from './index.module.scss';
import {useQuery} from "react-query";
import * as TodoAPI from "../../api/todos.api";


const App = () => {
    // const {todos, error, loading} = useFetchTodos();
    const {isLoading, data: todos} = useQuery('todos',
        () => TodoAPI.getTodos('todos').then((res) => res.data))

    return (
        <div className={styles.app}>
            <h1 className={styles.appTitle}>To Do App</h1>
            <div className={styles.appInput}>
                <InputAdd/>
            </div>
            <div className={styles.appList}>
                {/*{loading && <p>Loading...</p>}*/}
                {/*{error && <p>{error}</p>}*/}

                {isLoading ? <p>loading</p> : todos?.map((todo) => (
                    <ListTodos todo={todo} key={todo.todo_id}/>
                ))}
            </div>
        </div>
    );
}

export default App;
