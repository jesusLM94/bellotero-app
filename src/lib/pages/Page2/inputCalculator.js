import React from "react";
import { string, number } from "prop-types"

class InputCalculator extends React.Component {
    static propTypes = {
        name: string.isRequired,
        value: number.isRequired,
    }

    render() {
        return (
            <div className="flex-grid space-between">
                <p className="calculator-input-title">{this.props.name}</p>
                <input className="calculator-input" value={this.props.value} disabled />
            </div>
        )
    }
}

export default InputCalculator