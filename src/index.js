import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import belloteroLogo from './images/bellotero.svg'
import './index.css';
import store from './lib/store/store'
import {
    addPage,
} from './lib/store/actions'

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
                <ul>
                    {console.log(this.state)}
                    {this.state.pages.map((item) =>
                        <li className='menu-item'><a href={item.route}>{item.name}</a></li>
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
