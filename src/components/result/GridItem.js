import React from 'react';
import styles from './GridItem.module.css';

const GridItem = ({ item }) => {
    const { price, title, address: { state_name }, thumbnail, shipping: { free_shipping } } = item;

    return(
        <div className={styles.itemWrapper}>
            <img className={styles.itemImage} src={thumbnail} alt='item image' />
            <div className={styles.itemDetail}>
                <div className={styles.itemDetailHeader}>
                    <span>{price}</span>
                    {free_shipping && <img src='/img/ic_shipping.png' alt='shipit logo' />}
                </div>
                <span>{title}</span>
            </div>
            <div className={styles.itemLocation}>
                <span>{state_name}</span>
            </div>
        </div>
    )
}

export default GridItem;