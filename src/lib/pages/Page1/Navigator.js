import React from "react";
import {func} from 'prop-types'

class Navigator extends React.Component {
    static propTypes = {
        onChange: func.isRequired
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='flex-grid'>
                    <div className='col nav-content'>
                        1/4
                    </div>
                    <div className='col nav-content'>
                        <button type='button' value='1' onClick={() => this.props.onChange(1)}>1</button>
                        <button type='button' value='2' onClick={() => this.props.onChange(2)}>2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigator