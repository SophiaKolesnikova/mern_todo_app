import React from "react";
import InputAdd from "../InputAdd";
import ListTodos from "../ListTodos";
import {useFetchTodos} from "../../hooks/fetchTodos";

import styles from './index.module.scss';


const App = () => {
    const {todos, error, loading} = useFetchTodos();


    return (
        <div className={styles.app}>
            <h1 className={styles.appTitle}>To Do App</h1>
            <div className={styles.appInput}>
                <InputAdd/>
            </div>
            <div className={styles.appList}>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {todos?.map((todo) => (
                    <ListTodos todo={todo} key={todo.description}/>
                ))}
            </div>
        </div>
    );
}

export default App;
