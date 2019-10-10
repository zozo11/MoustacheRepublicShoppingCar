import React, {Component, Fragment} from 'react';
import './App.css';
import {Provider} from "react-redux";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import store from './store/store';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
    render() {

        return (
            <Provider store={store}>
                        <Fragment>
                            <Header/>
                            <Home/>
                        </Fragment>
                <Alert stack={{limit: 1}}/>
            </Provider>
        );
    }
}

export default App;
