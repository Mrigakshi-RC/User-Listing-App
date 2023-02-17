import React, {useState} from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from './Button';

function AddUser(props) {
    const [enteredName, setEnteredName]= useState('');
    const [enteredAge, setEnteredAge]= useState('');

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const userData={
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString()
        };

        props.onSaveUserData(userData);
        setEnteredName("");
        setEnteredAge("");
    };

    return (
    <Card className={styles.input}>
        <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler}/>
            <label>Age (Years)</label>
            <input type="number" min="13" step="1" value={enteredAge} onChange={ageChangeHandler}/>
            <Button>Add User</Button>
        </form>
    </Card>
    );
}

export default AddUser;
