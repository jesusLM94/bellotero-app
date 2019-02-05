import React from "react";
import axios from "axios";
import store from "../../store/store";
import {addSlider} from "../../store/actions";
import Title from "../../components/Title";
import Testimonial from "./Testimonial";
import Navigator from "./Navigator";
import { connect } from 'react-redux';
import { getSlider } from "../../store/reducer";

class Page1 extends React.Component {
    state = {
        active: 1
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
            .then(response => {
                const data = response.data.slider;
                store.dispatch(addSlider('page-1', data.title, data.reviews));
            })
    }

    updateActive = active => this.setState({active})

    render(){
        const { active } = this.state
        const { slider } = this.props
        const { title, reviews } = slider
        const total = reviews ? reviews.length : 0

        return <React.Fragment>
            <Title title={title}/>
            <Testimonial reviews={reviews} active={active}/>
            <Navigator onChange={this.updateActive} active={active} total={total}/>
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => ({
    slider: getSlider(state, ownProps.match.url.substr(1))
})

export default connect(mapStateToProps) (Page1)