import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage, AnimePage} from "../pages";
import Header from "../header/Header";

const App = () => {
    return (
        <main role="main" className="container">
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/anime" component={AnimePage}/>
            </Switch>
        </main>
    )
};

export default App;
