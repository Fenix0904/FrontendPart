import React, {Component} from 'react';
import './App.css';
import Service from "./service/Service";

class App extends Component {

    state = {
        myService: new Service(),
        animes: [

        ]
    };

    componentDidMount() {
        this.state.myService.getAllAnime()
            .then((item) => {
                this.setState({
                    animes: item
                });
            })
    }


    render() {
        return (
            <div className="App">
                <ul>
                {
                    this.state.animes.map(item => {
                        return (
                            <li key={item.id}>
                                <h2>
                                    {item.title}
                                </h2>
                                <br/>
                                <label>
                                    {item.description}
                                </label>
                                <ul>
                                    {item.genres.map(genre => {
                                        return (
                                            <li key={genre.id}>
                                                {genre.genre}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default App;
