import React from 'react';
import { locale } from '../../config';
import { toFixedLocale } from '../../utils/LocaleHelper';

const PriceItem = ({ price, currencyCode, className }) => {
    return (
        <div className={className} >{toFixedLocale(price, locale)}</div>
    )
}

export default PriceItem;