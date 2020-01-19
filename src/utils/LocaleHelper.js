export const toFixedLocale = (float, locale) => {
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        currency: locale.currency,
        style: 'currency',
        currencyDisplay: 'symbol',
    };
    return float.toLocaleString(`${locale.language}-${locale.country}`, options)
}
