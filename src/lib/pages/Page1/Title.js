import React from "react";
import _get from "lodash/get"
import store from "../../store/store";

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: {},
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                slider: _get(store.getState(), 'pages[0].slider', {}),
            });
        });
    }

    render() {
        return (
            <div className='title-container'>
                {this.state.slider ?
                    <p className='title'>{this.state.slider.title}</p>
                    : null}
            </div>
        )
    }
}

export default Title