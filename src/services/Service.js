import axios from "./axios-base";

export default class Service {

    getAllAnimes = async () => {
        const res = await axios.get(`/animes/`);
        return res.data;
    };

    getAnimeById = async (id) => {
        const res = await axios.get(`/animes/${id}`);
        return res.data;
    };

    getGenresList = async () => {
        const res = await axios.get(`/animes/genres/`);
        return res.data;
    };

    getSeasonsList = async () => {
        const res = await axios.get(`/animes/seasons/`);
        return res.data;
    };

    getTypesList = async () => {
        const res = await axios.get(`/animes/types/`);
        return res.data;
    };

    addNewAnime = async (anime) => {
        const res = await axios.post(`/animes/create/`, anime);
        return res.data;
    };

    uploadPoster = async (formdata) => {
        const res = await axios.post(`/animes/uploadPoster/`, formdata);
        return res.data;
    };
}