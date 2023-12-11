import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss';
import {useMutation, useQueryClient} from "react-query";
import * as TodoAPI from "../../api/todos.api";


const ListTodos = ({todo}) => {
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);
    const editInputRef = useRef(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (edit) {
            editInputRef?.current?.focus();
        }
    }, [edit]);


    const {mutate: updatedTodo} = useMutation(
        (updatedTodo) => TodoAPI.updateTodo(updatedTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );


    const {mutate: deleteTodo} = useMutation(
        (deleteTodo) => TodoAPI.removeTodo(deleteTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );


    const handleCheckbox = (e) => {
        setChecked(e.target.checked);
        setTimeout(() => {
            deleteTodo(todo);
        }, 300);
    };


    const handleChange = (e) => {
        updatedTodo({
            ...todo,
            description: e.target.value
        })
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
                        type="text"
                        value={todo.description}
                        onChange={handleChange}
                        ref={editInputRef}
                    />
                ) : (
                    <h3
                        className={styles.listTodosText}
                        style={checked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
                    >
                        {todo.description}
                    </h3>
                )}
            </label>
            {edit ? (
                <button
                    className={styles.listTodosSave}
                    onClick={() => setEdit(false)}
                >Save</button>
            ) : (
                <button
                    className={styles.listTodosEdit}
                    onClick={() => setEdit(true)}
                >Edit</button>
            )}
            <button
                className={styles.listTodosDelete}
                onClick={() => deleteTodo(todo)}
            >Delete
            </button>
        </div>
    );
};

export default ListTodos;