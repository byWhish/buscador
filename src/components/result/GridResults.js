import React, { useEffect } from 'react';
import queryString from 'query-string';
import ItemService from '../../services/ItemsService';

const GridResults = ({ location }) => {
    useEffect(() => {
        const { search } = queryString.parse(location.search);
        ItemService.searchItems(search);
    }, [location.search]);

    return (
        <div>{location.search}</div>
    )
}

export default GridResults;