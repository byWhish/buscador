import React from 'react';
import { locale } from '../../config';
import { toFixedLocale } from '../../utils/LocaleHelper';

const PriceItem = ({ price, currencyCode, className }) => {
    const { amount, currency } = price
    return (
        <div className={className} >{toFixedLocale(amount, { ...locale, currency })}</div>
    )
}

export default PriceItem;