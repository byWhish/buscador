import axios from 'axios';
import { baseEndpoint, ITEM_CONDITION } from '../config';

const generateSoldQuantity = (quantity) => quantity ? ` - ${quantity} vendidos` : '';

const processItem = (result) => {
    const {
        description: { plain_text },
            item: { id, condition, title, price, sold_quantity, pictures }
        } = result;
    return {
        condition: ITEM_CONDITION[condition],
        id,
        title,
        price,
        plain_text,
        sold_quantity: generateSoldQuantity(sold_quantity),
        picture: pictures[0].url
    }
}

const generateFiltersRoute = (filters) => {
    return filters.length ? filters[0].values[0].path_from_root.map(value => value.name).join(' > ') : '';
}

const searchItems = (query) => {
    const params = {
        q: query,
    }
    const endpoint = `${baseEndpoint}items/`;

    return axios.get(endpoint, { params })
        .then(response => {
            const { results, filters } = response.data;
            return {
                    items: results.slice(0, 4),
                    filtersRoute: generateFiltersRoute(filters),
                   }
        })
        .catch(error => console.log(error));
}

const fetchItem = (id) => {
    const endpoint = `${baseEndpoint}items/${id}`;

    return axios.get(endpoint)
        .then(response => {
            return processItem(response.data);
        });
}

export const ItemService = {
    searchItems,
    fetchItem
}

export default {
    searchItems,
    fetchItem
};