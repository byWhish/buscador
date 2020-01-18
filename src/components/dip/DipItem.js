import React, { useEffect } from 'react';

const DipItem = ({ match }) => {
    useEffect(() => {
        const { params: { id } } = match;
    }, [match.params.id]);

    return (
        <div>{match.params.id}</div>
    )
}

export default DipItem;