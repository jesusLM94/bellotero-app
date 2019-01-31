import React from "react";
import { number } from "prop-types";
import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";
import store from "../../store/store";

class Testimonial extends React.Component {
    state = {
        slider: {},
    };

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                slider: _get(store.getState(), 'pages[0].slider', {}),
            });
        });
    }

    render() {
        return (
            _isEmpty(this.state.slider) ? null :
                this.state.slider.reviews.map((review, index) =>
                    this.props.active === index + 1 ?
                        <div className='testimonial-container'>
                            <div className='flex-grid'>
                                <div className='col'>
                                    <h3 className='testimonial-name'>{review.name}</h3>
                                    <h5 className='testimonial-position'>{review.position}</h5>
                                </div>
                                <div className='col'>
                                    <p className='testimonial-review'>"{review.comment}"</p>
                                </div>
                            </div>
                        </div>
                        : null
                )
        )
    }
}

Testimonial.propTypes = {
    active: number.isRequired
};

export default Testimonial