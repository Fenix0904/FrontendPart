import axios from "./axios-base";

export default class Service {

    getAllAnimes = async () => {
        const res = await axios.get(`/animes/`);
        return res.data;
    };
}