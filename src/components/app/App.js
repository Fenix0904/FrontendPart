import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage, AnimeDetailsPage} from "../pages";
import Header from "../header/Header";
import LoginModal from "../modal/LoginModal";
import AnimeFormContainer from "../pages/form/AnimeFormContainer";

const App = () => {
    return (
        <main role="main">
            <Header/>
            <LoginModal/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/animes/:id" component={AnimeDetailsPage}/>
                <Route path="/create" component={AnimeFormContainer}/>
            </Switch>
        </main>
    )
};

export default App;
