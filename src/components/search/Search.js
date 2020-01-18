import React from 'react';
import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.searchWrapper}>
            <img className={styles.searchLogo} src='/img/Logo_ML.png' alt='ML_Logo' />
            <input className={styles.queryInput} />
            <input type='submit' />
        </div>
    );
}

export default Search;