import history from './History';
import { urls } from '../config';

const dipItem = (id) => {
    const { items } = urls;
    history.push(items+id);
}

const searchItems = (query) => {
    const { items } = urls;
    history.push(`${items}?search=${query}`)
}

const root = () => {
    history.push('/');
}

export const navigate = {
    to: {
        dipItem,
        searchItems,
        root,
    }
}