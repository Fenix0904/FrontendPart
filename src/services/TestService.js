export default class TestService {
    data = [
        {
            id: 1,
            title: "Sword Art Online",
            season: "Spring 2019",
            type: "TV",
            episodesCount: "24",
            genres: [
                {id: 1, genre: "Action"},
                {id: 2, genre: "Romance"}
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis or sit amet, consectetur adipisicing elit. Inventore officiis perferendolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?"
        },
        {
            id: 2,
            title: "Konosuba",
            season: "Summer 2014",
            type: "TV",
            episodesCount: "12",
            genres: [
                {id: 1, genre: "Isekai"},
                {id: 2, genre: "Comedy"}
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?"
        }
    ];
    genres = [
        {id: 1, genre: "Action"},
        {id: 2, genre: "Romance"},
        {id: 3, genre: "Isekai"},
        {id: 4, genre: "Horror"},
        {id: 5, genre: "Drama"},
        {id: 6, genre: "Fantasy"}
    ];
    seasons = [
        {id: 1, season: "Spring 2019"},
        {id: 2, season: "Winter 2019"},
        {id: 3, season: "Autumn 2018"},
        {id: 4, season: "Summer 2018"},
        {id: 5, season: "Spring 2018"},
        {id: 6, season: "Winter 2018"}
    ];
    types = [
        {id: 1, type: "TV"},
        {id: 2, type: "OVA"},
        {id: 3, type: "ONA"},
        {id: 4, type: "Movie"}
    ];

    getAllAnimes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                // reject(new Error("Smth went wrong"));
            }, 700)
        });
    }

    getAnimeById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data.find((item) => item.id == id));
            }, 700)
        });
    }

    getGenresList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.genres);
            }, 300)
        })
    }

    getSeasonsList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.seasons);
            }, 300)
        })
    }

    getTypesList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.types);
            }, 300)
        })
    }
}