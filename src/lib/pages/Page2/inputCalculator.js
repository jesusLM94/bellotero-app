import React from "react";
import { func } from "prop-types"

class InputCalculator extends React.Component {
    static propTypes = {
        onChange: func.isRequired
    }

    render() {
        return (
            <input onChange={event => this.props.onChange(event.target.value)} />
        )
    }
}

export default InputCalculator