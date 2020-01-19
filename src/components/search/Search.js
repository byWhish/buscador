import React, { useState, useCallback } from 'react';
import styles from './Search.module.css';
import { navigate } from '../../utils/NavigationHelper';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearchClick = useCallback(() => {
        navigate.to.searchItems(query);
    }, [query]);

    const handleSearchChange = useCallback((event) => {
        setQuery(event.target.value);
    }, [])

    return (
        <div className={styles.searchWrapper}>
            <img className={styles.searchLogo} src='/img/Logo_ML.png' alt='ML_Logo' />
            <div className={styles.inputWrapper}>
                <input placeholder='Nunca dejes de buscar' className={styles.queryInput} onChange={handleSearchChange} value={query} />
                <button onClick={handleSearchClick}>
                    <img src='/img/ic_Search.png' alt='buttonIcon' />
                </button>
            </div>
        </div>
    );
}

export default Search;