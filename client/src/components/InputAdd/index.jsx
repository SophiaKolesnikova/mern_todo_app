import React, {useState} from 'react';
import styles from "./index.module.scss";

const InputAdd = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
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

    const handleClick = () => {

    }


    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}>
            <input
                type="text"
                className={styles.formInput}
                value={description}
                onChange={handleChange}
                placeholder="Create todo..."
            />
            <button
                className={styles.formButton}
                // onClick={handleClick}
            >Add</button>
        </form>
    );
};

export default InputAdd;