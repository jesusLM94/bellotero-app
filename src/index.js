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
import Page2 from "./lib/pages/Page2/Page2";
import { Provider } from 'react-redux';

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
            <Provider store={store}>
                <div className='main-container'>
                    <Header />
                    <Router>
                        <Switch>
                            <Route path="/:page" render={
                                ({ match }) => {
                                    switch (match.params.page) {
                                        case 'page-1':
                                            return <Page1 />;
                                        case 'page-2':
                                            return <Page2 />;
                                        default:
                                            return null;
                                    }
                                }
                            }/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

// ========================================

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
