import React from "react";
import InputAdd from "../InputAdd";
import ListTodos from "../ListTodos";
import styles from './index.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <h1 className={styles.appTitle}>To Do App</h1>
            <div className={styles.appInput}>
                <InputAdd/>
            </div>
            <div className={styles.appList}>
                <ListTodos/>
            </div>
        </div>
    );
}

export default App;
