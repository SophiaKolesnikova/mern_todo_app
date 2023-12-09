import React, {useState} from 'react';
import styles from "./index.module.scss";

const InputAdd = () => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (description.trim().length === 0) {
            setError("Please enter valid task.");
            return;
        }
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
           console.log(response);
            setDescription('');
        } catch (err) {
            console.log(err);
        }
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
                placeholder="Create task..."
            />
            <button
                className={styles.formButton}
            >Add</button>
            {error && <p className={styles.formText}>{error}</p>}
        </form>
    );
};

export default InputAdd;