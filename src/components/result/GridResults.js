import React, { useEffect, useState, Fragment } from 'react';
import queryString from 'query-string';
import ItemService from '../../services/ItemsService';
import GridItem from './GridItem';
import { PAGE_STATE } from '../../config';
import LoadingWrapper, { useLoading } from '../common/useLoading';

import styles from './GridResults.module.css';

const GridResults = ({ location, setFiltersRoute, filtersRoute }) => {
    const [items, setItems] = useState([]);
    const [status, done, , error] = useLoading(PAGE_STATE.LOADING)

    useEffect(() => {
        const { search } = queryString.parse(location.search);
        ItemService.searchItems(search)
            .then(response => {
                setItems(response.items)
                setFiltersRoute(response.filtersRoute)
                done();
             })
            .catch(() => error())
    }, [location.search, done, error, setFiltersRoute]);

    return (
        <LoadingWrapper status={status}>
            <Fragment>
                <div className={styles.filtersRoute}>{filtersRoute}</div>
                <div className={styles.gridWrapper}>
                    {items.map( item => {
                        return (<GridItem key={item.id} item={item} />)
                    })}
                </div>
            </Fragment>
        </LoadingWrapper>
    )
}

export default GridResults;