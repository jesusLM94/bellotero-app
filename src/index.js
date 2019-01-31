import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Route, Switch} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import store from './lib/store/store'
import {
    addPage,
} from './lib/store/actions'
import Header from "./lib/components/Header";
import Page1 from "./lib/pages/Page1/Page1";

class App extends React.Component {
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
            .then(response => {
                const pages = (response.data.menu.items);
                pages.forEach(page => {
                    store.dispatch(addPage(page.text, page.route));
                })
            })
    }

    render() {
        return (
            <div className='main-container'>
                <Header />
                <Router>
                    <Switch>
                        {/*<Route path="/page-1" exact component={} />*/}
                        <Route component={Page1} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
