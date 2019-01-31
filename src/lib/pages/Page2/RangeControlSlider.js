import React from "react";
import {string, number, func} from "prop-types"

class RangeControlSlider extends React.Component {
    static propTypes = {
        name: string.isRequired,
        min: number.isRequired,
        max: number.isRequired,
        value: number.isRequired,
        onChange: func.isRequired,
    }

    render() {
        const {min, max, name, onChange, value}  = this.props;

        return <React.Fragment>
            {name}
            <input
                value={value}
                type="range"
                name={name}
                min={min}
                max={max}
                onChange={event => onChange(event.target.value)}/>
        </React.Fragment>


    }
}

export default RangeControlSlider