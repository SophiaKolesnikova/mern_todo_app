import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import * as TodoAPI from "../../api/todos.api";
import { debounce } from 'lodash';

import styles from './index.module.scss';

const ListTodos = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);
    const editInputRef = useRef(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (edit) {
            editInputRef?.current?.focus();
        }
    }, [edit]);

    const {mutate: updateTodo} = useMutation(
        (updatedTodo) => TodoAPI.updateTodo(updatedTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    const debouncedUpdateTodo = useCallback(
        debounce(updateTodo, 700),
        [updateTodo]
    );

    useEffect(() => {
        if (description !== todo.description) {
            debouncedUpdateTodo({
                ...todo,
                description,
            });
        }
    }, [description]);

    const {mutate: deleteTodo} = useMutation(
        (deletedTodo) => TodoAPI.removeTodo(deletedTodo),
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

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            setEdit(false);
        }
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
                        type="text"
                        value={description}
                        onChange={handleChange}
                        ref={editInputRef}
                        onKeyDown={handleOnKeyDown}
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