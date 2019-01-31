import React from "react";

class Navigator extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <div className='flex-grid'>
                    <div className='col nav-content'>
                        1/4
                    </div>
                    <div className='col nav-content'>
                        <button type='button' value='1'>1</button>
                        <button type='button' value='2'>2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigator