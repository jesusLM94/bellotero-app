import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import belloteroLogo from './images/bellotero.svg'
import './index.css';
import store from './lib/store/store'

import {
    addPage,
} from './lib/store/actions'
import Page1 from "./lib/pages/Page1/Page1";

class Container extends React.Component {
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
                <Header/>
                <Page1 />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
        };
        store.subscribe(() => {
            this.setState({
                pages: store.getState().pages,
            });
        });
    }

    render() {
        return (
            <div className='header-container'>
                <img src={belloteroLogo} className='bellotero-logo' alt='logo'/>
                <ul className="menu-items">
                    {this.state.pages.map((item) =>
                        <li className='menu-item'><a className='menu-item-link' href={item.route}>{item.name}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
