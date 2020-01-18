import axios from 'axios';
import { baseEndpoint } from '../config';

const searchItems = (query) => {
    const params = {
        q: query,
    }
    const endpoint = `${baseEndpoint}items/`;

    axios.get(endpoint, { params })
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error));
}

const fetchItem = (id) => {
    const endpoint = `${baseEndpoint}items/${id}`;

    axios.get(endpoint)
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