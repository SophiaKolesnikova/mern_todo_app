import React, {useEffect, useRef} from 'react';
import {useAddTodo} from "../../hooks/useAddTodo";
import styles from "./index.module.scss";
import {useMutation, useQueryClient} from "react-query";
import * as TodoAPI from "../../api/todos.api";

const InputAdd = () => {
    const {description, error, addNewTodo, setDescription, loading} = useAddTodo();
    const addInputRef = useRef(null);
    const queryClient = useQueryClient();

    const {mutate: newTodo} = useMutation(
        (newTodo) => TodoAPI.addTodo(newTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    useEffect(() => {
        addInputRef?.current?.focus();
    }, [addInputRef]);

    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <form
            onSubmit={addNewTodo}
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
            {error && <p className={styles.formText}>{error}</p>}
            {loading && <p>Loading...</p>}
        </form>
    );
};

export default InputAdd;