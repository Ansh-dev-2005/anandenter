import axios from 'axios';

const url = 'http://anandenterprisesddn.co.in/server/products';

export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct) => axios.post(url, newProduct);