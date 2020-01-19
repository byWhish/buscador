import React, { useEffect, useState, Fragment } from 'react';
import queryString from 'query-string';
import ItemService from '../../services/ItemsService';
import GridItem from './GridItem';
import styles from './GridResults.module.css';

const GridResults = ({ location, setFiltersRoute, filtersRoute }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const { search } = queryString.parse(location.search);
        ItemService.searchItems(search)
            .then(response => {
                setItems(response.items)
                setFiltersRoute(response.filtersRoute)
             })
    }, [location.search]);

    return (
        <Fragment>
            <div className={styles.filtersRoute}>{filtersRoute}</div>
            <div className={styles.gridWrapper}>
                {items.map( item => {
                    return (<GridItem key={item.id} item={item} />)
                })}
            </div>
        </Fragment>
    )
}

export default GridResults;