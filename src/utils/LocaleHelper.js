import IntlPolifill from 'intl';

export const toFixedLocale = (float, locale) => {
    console.log(locale, `${locale.language}-${locale.country}`)
    getIntl();
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        currency: locale.currency,
        style: 'currency',
        currencyDisplay: 'symbol',
        useGrouping: true,
    };
    return new Intl.NumberFormat(`${locale.language}-${locale.country}`, options).format(Number(float));
}

const getIntl = () => {
    if (!global.Intl) global.Intl = IntlPolifill;
}