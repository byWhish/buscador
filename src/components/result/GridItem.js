import React, { useCallback } from 'react';
import styles from './GridItem.module.css';
import { navigate } from '../../utils/NavigationHelper';
import PriceItem from '../common/PriceItem';

const GridItem = ({ item }) => {
    const { id, price, title, state, picture, free_shipping } = item;

    const handleItemClick = useCallback(() => {
        navigate.to.dipItem(id)
    }, [id])

    return(
        <div className={styles.itemWrapper}>
            <img className={styles.itemImage} src={picture} alt='item thumbnail' onClick={handleItemClick} />
            <div className={styles.itemDetail}>
                <div className={styles.itemDetailHeader}>
                    <PriceItem price={price} />
                    {free_shipping && <img src='/img/ic_shipping.png' alt='shipit logo' />}
                </div>
                <span className={styles.itemTitle} onClick={handleItemClick}>{title}</span>
            </div>
            <div className={styles.itemLocation}>
                <span>{state}</span>
            </div>
        </div>
    )
}

export default GridItem;