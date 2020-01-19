var got = require('got');

const processItem = ({ result, description, decimals }) => {
    const { id, condition, title, price, sold_quantity, pictures, currency_id, thumbnail, shipping, address } = result;
    return {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals,
            },
            picture: pictures ? pictures[0].url : thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity: sold_quantity,
            description,
            state: address ? address.state_name : null,
    }
}

const processGridItem = ({ result }) => {
    const { results, filters } = result;
    return {
        categories: filters.length ? filters[0].values[0].path_from_root.map(value => value.name) : [],
        items: results.map(result => processItem({ result, decimals: 0 })),
    }
}

function searchItems(query) {
    const searchParams = query;
    return got('https://api.mercadolibre.com/sites/MLA/search', { searchParams })
        .then(response => {
            return processGridItem({ result: JSON.parse(response.body) })
        });
}

function getItem(id) {
    const item = got(`https://api.mercadolibre.com/items/${id}`);
    const description = got(`https://api.mercadolibre.com/items/${id}/description`);
    return Promise.all([item, description])
        .then(values => {
            const { plain_text: description } = JSON.parse(values[1].body)
            const result = JSON.parse(values[0].body);
            const item = processItem({ result , description, decimals: 0 });
            return { item };
        })
}

module.exports = {
    searchItems, getItem,
}