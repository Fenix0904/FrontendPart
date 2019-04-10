import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage, AnimePage} from "../pages";
import Header from "../header/Header";

const App = () => {
    return (
        <main role="main">
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/animes/:id" component={AnimePage}/>
            </Switch>
        </main>
    )
};

export default App;
