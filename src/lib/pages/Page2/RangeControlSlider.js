import React from "react";
import {number, func} from "prop-types"

class RangeControlSlider extends React.Component {
    static propTypes = {
        min: number.isRequired,
        max: number.isRequired,
        value: number.isRequired,
        onChange: func.isRequired,
    }

    render() {
        const {min, max, onChange, value}  = this.props;

        return <React.Fragment>
            <input className="range-input"
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={event => onChange(event.target.value)}/>
        </React.Fragment>


    }
}

export default RangeControlSlider