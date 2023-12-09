import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cheked, setChecked] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchTodos = async () => {
            const response = await fetch("http://localhost:5000/todos");
            const todosArray = await response.json();
            setTodos(todosArray);
            setLoading(false);
        };
        fetchTodos();
    }, []);

    console.log(todos)
    return (
        <div className={styles.listTodos}>
            {loading && <p>Loading...</p>}
            {/*{todos?.map(todo) => (*/}

            {/*    )}*/}
            <label>
                <input
                    type="checkbox"
                    className={styles.listTodosCheckbox}
                    checked={cheked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <h3 className={styles.listTodosText}>{description}</h3>
            </label>
            <button className={styles.listTodosEdit}>Edit</button>
            <button className={styles.listTodosDelete}>Delete</button>

        </div>
    );
};

export default ListTodos;