import axios from 'axios';

export default class Service {

    baseURL = "http://localhost:8080";

    getBaseUrl = () => {
        return this.baseURL;
    };

    getAllAnimes = async () => {
        const res = await axios.get(`${this.baseURL}/animes/`);
        return res.data;
    };

    getAnimeById = async (id) => {
        const res = await axios.get(`${this.baseURL}/animes/${id}`);
        return res.data;
    };

    getGenresList = async () => {
        const res = await axios.get(`${this.baseURL}/animes/genres/`);
        return res.data;
    };

    getSeasonsList = async () => {
        const res = await axios.get(`${this.baseURL}/animes/seasons/`);
        return res.data;
    };

    getTypesList = async () => {
        const res = await axios.get(`${this.baseURL}/animes/types/`);
        return res.data;
    };

    addNewAnime = async (anime) => {
        return await axios.post(`${this.baseURL}/animes/create/`, anime);
    };

    updateAnime = async (anime) => {
        return await axios.put(`${this.baseURL}/animes/update/`, anime);
    };

    deleteAnime = async (id) => {
        return await axios.delete(`${this.baseURL}/animes/delete/${id}`);
    };
}