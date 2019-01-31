import React from "react";
import { number } from "prop-types"

class InputCalculator extends React.Component {
    static propTypes = {
        value: number.isRequired
    }

    render() {
        return (
            <input value={this.props.value} disabled />
        )
    }
}

export default InputCalculator