import React, { useEffect, useState, Fragment } from 'react';
import ItemService from '../../services/ItemsService';
import { PAGE_STATE } from '../../config';
import PriceItem from '../common/PriceItem';
import LoadingWrapper, { useLoading } from '../common/useLoading';

import styles from './DipItem.module.css';

const DipItem = ({ match, filtersRoute }) => {
    const [source, setSource] = useState({});
    const [status, done, , error] = useLoading(PAGE_STATE.LOADING)

    useEffect(() => {
        const { params: { id } } = match;
        ItemService.fetchItem(id)
            .then(response => {
                setSource(response);
                done();
            })
            .catch(() => error())
    }, [match, done, error]);

    return (
        <LoadingWrapper status={status}>
        <Fragment>
            <div className={styles.filtersRoute}>{filtersRoute}</div>
                <div className={styles.dipItemWrapper}>
                    <div className={styles.itemDetail}>
                        <div className={styles.itemImage}>
                            <img src={source.picture} alt=''/>
                        </div>
                    <div className={styles.itemDescription}>
                        <div className={styles.descriptionTile}>Descripción del producto</div>
                        <div className={styles.description}>{source.description}</div>
                    </div>
                </div>
                <div className={styles.purchaseDetail}>
                    <div className={styles.itemStatus}>{source.condition}{source.sold_quantity}</div>
                    <div className={styles.itemTitle}>{source.title}</div>
                    <PriceItem price={source.price} className={styles.price} />
                    <button>Comprar</button>
                </div>
            </div>
        </Fragment>
        </LoadingWrapper>
    )
}

export default DipItem;