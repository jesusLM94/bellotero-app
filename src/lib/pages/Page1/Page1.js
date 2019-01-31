import React from "react";
import axios from "axios";
import store from "../../store/store";
import {addSlider} from "../../store/actions";
import Title from "../../components/Title";
import Testimonial from "./Testimonial";
import Navigator from "./Navigator";
import _get from "lodash/get";

class Page1 extends React.Component {
    state = {
        slider: {},
        active: 1
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
            .then(response => {
                const data = response.data.slider;
                store.dispatch(addSlider('page-1', data.title, data.reviews));
            })

        store.subscribe(() => {
            this.setState({
                slider: _get(store.getState(),  `pages[${this.props.match.params.page}].slider`, {}),
            });
        });
    }

    updateActive = active => this.setState({active})

    render(){
        const { active, slider } = this.state
        const { title, reviews } = slider

        return <React.Fragment>
            <Title title={title}/>
            <Testimonial reviews={reviews} active={active}/>
            <Navigator onChange={this.updateActive}/>
        </React.Fragment>
    }
}

export default Page1