import axios from 'axios';

const API_KEY = '34805768-35b9cce1cd8352b1a621916f1';
const baseURL = `https://pixabay.com/api`;

axios.defaults.baseURL = baseURL;

export const getData = async (query, page) => {
    const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: page,
  };

    return await axios.get('/', {params});
}

// console.log(getData().then(data=> console.log(data.data.hits)))