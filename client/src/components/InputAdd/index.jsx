import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from "react-query";
import * as TodoAPI from "../../api/todos.api";

import styles from "./index.module.scss";

const InputAdd = () => {
    const [description, setDescription] = useState('');
    const addInputRef = useRef(null);
    const queryClient = useQueryClient();

    const {mutate: createTodo} = useMutation(
        (createTodo) => TodoAPI.addTodo(createTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    useEffect(() => {
        addInputRef?.current?.focus();
    }, [addInputRef]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        createTodo({
            description,
        });
        setDescription('');
    };

    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}>
            <input
                type="text"
                className={styles.formInput}
                value={description}
                onChange={handleChange}
                ref={addInputRef}
                placeholder="Create task..."
            />
            <button
                className={styles.formButton}
                type='submit'
            >Add
            </button>
        </form>
    );
};

export default InputAdd;