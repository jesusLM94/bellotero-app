import React from "react";
import { string } from "prop-types"

class Title extends React.Component {
    static propTypes = {
        title: string.isRequired
    }

    render() {
        return (
            <div className='title-container'>
                {this.props.title ?
                    <p className='title'>{this.props.title}</p>
                    : null}
            </div>
        )
    }
}

export default Title