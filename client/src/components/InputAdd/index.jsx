import React, {useEffect, useRef} from 'react';
import {useAddTodo} from "../../hooks/addTodo";
import styles from "./index.module.scss";

const InputAdd = () => {
    const {description, error, addNewTodo, setDescription, loading} = useAddTodo();
    const addInputRef = useRef(null);

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