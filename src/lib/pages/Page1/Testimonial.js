import React from "react";
import { array, number } from "prop-types";
import _isEmpty from "lodash/isEmpty";

class Testimonial extends React.Component {
    render() {
        return (
            _isEmpty(this.props.reviews) ? null :
                this.props.reviews.map((review, index) =>
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
    active: number,
    reviews: array.isRequired
};

export default Testimonial