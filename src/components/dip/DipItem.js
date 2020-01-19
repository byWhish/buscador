import React, { useEffect, useState, Fragment } from 'react';
import ItemService from '../../services/ItemsService';
import { PAGE_STATE } from '../../config';
import styles from './DipItem.module.css';

const DipItem = ({ match, filtersRoute }) => {
    const [source, setSource] = useState(null);
    const [loading, setLoading] = useState(PAGE_STATE.LOADING)

    useEffect(() => {
        const { params: { id } } = match;
        ItemService.fetchItem(id)
            .then(response => {
                setSource(response);
                setLoading(PAGE_STATE.DONE);
            })
            .catch(() => setLoading(PAGE_STATE.ERROR))
    }, [match]);

    if (loading === PAGE_STATE.LOADING || loading === PAGE_STATE.ERROR ) return null;

    return (
        <Fragment>
            <div className={styles.filtersRoute}>{filtersRoute}</div>
                <div className={styles.dipItemWrapper}>
                    <div className={styles.itemDetail}>
                        <div className={styles.itemImage}>
                            <img src={source.item.pictures[0].url} />
                        </div>
                    <div className={styles.itemDescription}>
                        <div>Descripcion del producto</div>
                        <div>{source.description.plain_text}</div>
                    </div>
                </div>
                <div className={styles.purchaseDetail}>
                    <div>{source.item.condition} - {source.item.sold_quantity}</div>
                    <div>{source.item.title}</div>
                    <div>{source.item.price}</div>
                    <button>Comprar</button>
                </div>
            </div>
        </Fragment>
    )
}

export default DipItem;