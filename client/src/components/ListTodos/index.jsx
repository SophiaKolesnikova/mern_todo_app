import React, {useEffect, useRef, useState} from 'react';
import {useRemoveTodo} from "../../hooks/removeTodo";
import {useUpdateTodo} from "../../hooks/updateTodo";
import styles from './index.module.scss';


const ListTodos = ({todo}) => {
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);
    const [description, setDescription] = useState(todo.description);
    const editInputRef = useRef(null);
    const {deleteTodo} = useRemoveTodo();
    const {editTodo} = useUpdateTodo();

    useEffect(() => {
        if (edit) {
            editInputRef?.current?.focus();
        }
    }, [edit]);


    const handleCheckbox = (e) => {
        setChecked(e.target.checked);
        setTimeout(() => {
            deleteTodo(todo.todo_id);
        }, 300)

    };


    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div className={styles.listTodos}>
            <label className={styles.listTodosLabel}>
                <input
                    type="checkbox"
                    className={styles.listTodosCheckbox}
                    checked={checked}
                    disabled={edit}
                    onChange={handleCheckbox}

                />
                {edit ? (
                    <input
                        className={styles.listTodosDescription}
                        value={description}
                        onChange={() => handleChange}
                        ref={editInputRef}
                    />
                ) : (
                    <h3
                        className={styles.listTodosText}
                        style={checked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
                    >{todo.description}</h3>
                )}
            </label>
            {edit ? (
                <button
                    className={styles.listTodosSave}
                    onClick={() => {
                        editTodo(todo.todo_id, todo.description);
                        setEdit(false);
                    }}
                >Save</button>
            ) : (
                <button
                    className={styles.listTodosEdit}
                    onClick={() => setEdit(true)}
                >Edit</button>
            )}
            <button
                className={styles.listTodosDelete}
                onClick={() => deleteTodo(todo.todo_id)}
            >Delete
            </button>
        </div>
    );
};

export default ListTodos;