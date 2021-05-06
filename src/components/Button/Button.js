import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, ...props}) => (
    // <button {...props}>{children}</button>
    <button className={styles.button} {...props}>Add</button>
)

export default Button;