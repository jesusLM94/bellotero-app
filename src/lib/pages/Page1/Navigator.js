import React from "react";
import {func, number} from 'prop-types'

class Navigator extends React.Component {
    static propTypes = {
        onChange: func.isRequired,
        active: number.isRequired,
        total: number.isRequired,
    }


    render() {
        const {active, total, onChange} = this.props;
        return (
            <div className='nav-container'>
                <div className='flex-grid'>
                    <div className='col nav-content'>
                        {active}/{total}
                    </div>
                    <div className='col nav-content'>
                        <button type='button' value='1' onClick={() => onChange(1)}>1</button>
                        <button type='button' value='2' onClick={() => onChange(2)}>2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigator