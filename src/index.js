import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Service from './services/Service';
import {ServiceContextProvider} from "./components/service-context/ServiceContext";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceContextProvider value={service}>
                <Router>
                    <App/>
                </Router>
            </ServiceContextProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));
