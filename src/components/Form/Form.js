import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button'

const Form = () => (

    <div className={styles.wrapper}>    
        <form className={styles.form} autoComplete="off">
            <Input name = 'title' label = 'title'/>
            <Input tag="textarea"
                name="description"
                label="Description"/>
            <div className={styles.button}>
                <Button>Add New</Button>
            </div>
        </form>
    </div>
)
export default Form;