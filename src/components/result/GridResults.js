import React, { useEffect } from 'react';
import queryString from 'query-string';

const GridResults = ({ location }) => {
    useEffect(() => {
        const { search } = queryString.parse(location.search);
    }, [location.search]);

    return (
        <div>{location.search}</div>
    )
}

export default GridResults;