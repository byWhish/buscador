import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import ItemService from '../../services/ItemsService';
import GridItem from './GridItem';
import styles from './GridResults.module.css';

const GridResults = ({ location }) => {
    const [items, setItems] = useState([]);
    const [filtersRoute, setFiltersRoute] = useState('');

    useEffect(() => {
        const { search } = queryString.parse(location.search);
        ItemService.searchItems(search)
            .then(response => {
                setItems(response.items)
                setFiltersRoute(response.filtersRoute)
             })
    }, [location.search]);

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.filtersRoute}>{filtersRoute}</div>
            {items.map( item => {
                return (<GridItem key={item.id} item={item} />)
            })}
        </div>
    )
}

export default GridResults;