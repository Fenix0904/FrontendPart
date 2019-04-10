export default class TestService {

    data = [
        {
            id: 1,
            title: "Sword Art Online",
            genres: [
                { id: 1, genre: "Action" },
                { id: 2, genre: "Romance" }
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis or sit amet, consectetur adipisicing elit. Inventore officiis perferendolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?"
        },
        {
            id: 2,
            title: "Konosuba",
            genres: [
                { id: 1, genre: "Isekai" },
                { id: 2, genre: "Comedy" }
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis perferendis praesentium quos soluta?"
        }
    ];

    getAllAnimes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                // reject(new Error("Smth went wrong"));
            }, 700)
        });
    }
}