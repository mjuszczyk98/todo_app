import React from 'react';
import styles from './Page.module.scss';
import PageItems from '../PageItems/PageItems';

const Page = ({items}) => (
    <div className={styles.wrapper}>    
        <ul className={styles.ul}>
            {items.map(item => (
                <PageItems key={item.title} {...item}/>

            ))}
        </ul>
    </div>
);

export default Page;