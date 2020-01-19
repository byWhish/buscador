import React, { useState, useCallback } from 'react';
import styles from './Search.module.css';
import { navigate } from '../../utils/NavigationHelper';

const handleLogoClick = () => navigate.to.root();

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearchClick = useCallback(() => {
        if (query) {
            navigate.to.searchItems(query);
            setQuery('');
        }
    }, [query]);

    const handleKeyPress = useCallback((e) => {
        const key = e.which || e.keyCode;
        if (key === 13 && query) {
            navigate.to.searchItems(query);
            setQuery('');
        }
    }, [query])

    const handleSearchChange = useCallback((event) => {
        setQuery(event.target.value);
    }, [])

    return (
        <div className={styles.searchWrapper}>
            <img className={styles.searchLogo} src='/img/Logo_ML.png' alt='ML_Logo' onClick={handleLogoClick} />
            <div className={styles.inputWrapper}>
                <input placeholder='Nunca dejes de buscar' className={styles.queryInput} onChange={handleSearchChange} value={query} onKeyPress={handleKeyPress} />
                <button onClick={handleSearchClick}>
                    <img src='/img/ic_Search.png' alt='buttonIcon' />
                </button>
            </div>
        </div>
    );
}

export default Search;