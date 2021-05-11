import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageItems.module.scss';

const PageItems = ({ title, description }) => (
    <li className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
    </li>
);

PageItems.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
export default PageItems;