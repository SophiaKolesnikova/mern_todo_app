import React, {useState} from 'react';
import styles from './index.module.scss';


const ListTodos = ({todo}) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(todo.description);


    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };


    return (
        <div className={styles.listTodos}>
            <label className={styles.listTodosLabel}>
                <input
                    type="checkbox"
                    disabled={edit}
                    className={styles.listTodosCheckbox}
                    checked={checked}
                    onChange={handleChecked}
                />
                {edit ? (
                    <input
                        className={styles.listTodosDescription}
                        value={value}
                        onChange={handleChange}
                    />
                ) : (
                    <h3 className={styles.listTodosText}>{todo.description}</h3>
                )}
            </label>
            {edit ? (
                <button className={styles.listTodosEdit}>Save</button>
            ) : (
                <button className={styles.listTodosEdit}>Edit</button>
            )}
            <button className={styles.listTodosDelete}>Delete</button>
        </div>
    );
};

export default ListTodos;