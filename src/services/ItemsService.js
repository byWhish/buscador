import axios from 'axios';
import { baseEndpoint, ITEM_CONDITION, author } from '../config';

const generateSoldQuantity = (quantity) => quantity ? ` - ${quantity} vendidos` : '';

const processItem = (result) => {
    const { condition, sold_quantity, ...rest } = result;
    return {
        condition: ITEM_CONDITION[condition],
        sold_quantity: generateSoldQuantity(sold_quantity),
        ...rest,
    }
}

const generateFiltersRoute = (categories = []) => {
    return categories.length ? categories.join(' > ') : '';
}

const searchItems = (query) => {
    const headers = {
        Author: JSON.stringify(author)
    }

    const params = {
        q: query,
    }
    const endpoint = `${baseEndpoint}items/`;

    return axios.get(endpoint, { params, headers })
        .then(response => {
            const { items, categories } = response.data;
            return {
                    items: items.slice(0, 4),
                    filtersRoute: generateFiltersRoute(categories),
                   }
        })
        .catch(error => console.log(error));
}

const fetchItem = (id) => {
    const endpoint = `${baseEndpoint}items/${id}`;

    const headers = {
        Author: JSON.stringify(author)
    }

    return axios.get(endpoint, { headers })
        .then(response => {
            const { item } = response.data;
            return processItem(item);
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