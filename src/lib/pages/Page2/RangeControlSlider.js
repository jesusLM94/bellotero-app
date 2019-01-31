import React from "react";
import {string, number, func} from "prop-types"

class RangeControlSlider extends React.Component {
    static propTypes = {
        name: string.isRequired,
        min: number.isRequired,
        max: number.isRequired,
        onChange: func.isRequired,
    }

    render() {
        const props = this.props
        return <React.Fragment>
            {props.name} <input type="range" name={props.name} min={props.min} max={props.max}
                                onChange={event => props.onChange(event.target.value)}/>
        </React.Fragment>


    }
}

export default RangeControlSlider