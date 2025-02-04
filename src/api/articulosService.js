import api from "./config.js";

export const getArticulos = async () => {
    const { data } = await api.get('/articulos');
    return data;
};

export const createArticulo = async (articulo) => {
    const { data } = await api.post('/articulos', articulo);
    return data;
};