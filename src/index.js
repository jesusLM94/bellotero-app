import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import belloteroLogo from './images/bellotero.svg'
import './index.css';
import store from './lib/store/store'
import {
    addPage,
    addSlider,
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

        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
            .then(response => {
                const data = response.data.slider;
                store.dispatch(addSlider('page-1', data.title, data.reviews));
            })
    }

    render() {
        return (
            <div className='main-container'>
                <Header/>
                <Title/>
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

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: {},
        };
        store.subscribe(() => {
            this.setState({
                slider: store.getState().pages[0].slider,
            });
        });
    }

    render() {
        return (
            <div className='title-container'>
                {this.state.slider ?
                    <p className='title'>{this.state.slider.title}</p>
                    : ''}
            </div>
        )
    }
}

class Testimonial extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

// ========================================

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
