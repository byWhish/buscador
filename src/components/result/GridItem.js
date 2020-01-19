import React, { useCallback } from 'react';
import styles from './GridItem.module.css';
import { toFixedLocale } from '../../utils/LocaleHelper';
import { locale } from '../../config';
import history from '../../utils/History';
import { navigate } from '../../utils/NavigationHelper';
import PriceItem from '../common/PriceItem';

const GridItem = ({ item }) => {
    const { id, price, title, address: { state_name }, thumbnail, shipping: { free_shipping } } = item;

    const handleItemClick = useCallback(() => {
        navigate.to.dipItem(id)
    }, [id])

    return(
        <div className={styles.itemWrapper}>
            <img className={styles.itemImage} src={thumbnail} alt='item thumbnail' onClick={handleItemClick} />
            <div className={styles.itemDetail}>
                <div className={styles.itemDetailHeader}>
                    <PriceItem price={price} />
                    {free_shipping && <img src='/img/ic_shipping.png' alt='shipit logo' />}
                </div>
                <span className={styles.itemTitle}>{title}</span>
            </div>
            <div className={styles.itemLocation}>
                <span>{state_name}</span>
            </div>
        </div>
    )
}

export default GridItem;