import React, { useEffect } from 'react';
import ItemService from '../../services/ItemsService';

const DipItem = ({ match }) => {
    useEffect(() => {
        const { params: { id } } = match;
        ItemService.fetchItem(id);
    }, [match.params.id]);

    return (
        <div>{match.params.id}</div>
    )
}

export default DipItem;