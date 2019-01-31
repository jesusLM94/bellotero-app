import React from "react";
import axios from "axios";
import store from "../../store/store";
import {addSlider} from "../../store/actions";
import Title from "./Title";
import Testimonial from "./Testimonial";
import Navigator from "./Navigator";

class Page1 extends React.Component {
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
            .then(response => {
                const data = response.data.slider;
                store.dispatch(addSlider('page-1', data.title, data.reviews));
            })
    }

    render(){
        return <React.Fragment>
            <Title/>
            <Testimonial active={1}/>
            <Navigator />
        </React.Fragment>
    }
}

export default Page1