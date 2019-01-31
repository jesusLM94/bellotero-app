import React from "react";
import { string } from "prop-types";

class CalculatorDescription extends React.Component {
    static propTypes = {
        description: string.isRequired
    }

    render() {
        return (
            <div className='calculator-description'>
                {this.props.description ?
                    <p> {this.props.description} </p>
                    : null}
            </div>
        )
    }
}

export default CalculatorDescription