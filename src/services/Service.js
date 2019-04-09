import axios from "./axios-base";

export default class Service {

    getAllAnime = async () => {
        const res = await axios.get(`/animes/`);
        return res.data;
    };
}