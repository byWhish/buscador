import axios from 'axios';
import { baseEndpoint } from '../config';

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
                    filtersRoute: filters[0].values[0].path_from_root.map(value => value.name).join(' > '),
                   }
        })
        .catch(error => console.log(error));
}

const fetchItem = (id) => {
    const endpoint = `${baseEndpoint}items/${id}`;

    return axios.get(endpoint)
        .then(response => {
            return response.data;
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