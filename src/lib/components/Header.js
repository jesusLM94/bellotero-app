import React from "react";
import store from "../store/store";
import belloteroLogo from "../../images/bellotero.svg";

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

export default Header