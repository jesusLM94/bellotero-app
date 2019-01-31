import React from "react";
import { string, num} from "prop-types"

class RangeControlSlider extends React.Component {
    static propTypes = {
        name: string.isRequired,
        min: num.isRequired,
        max: num.isRequired,
    }

    render() {
        const props = this.props
        return (
            <input type="range" name={props.name} min={props.min} max={props.max} />
        )
    }
}

export default RangeControlSlider