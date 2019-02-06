import React from "react";
import store from "../../store/store";
import { fetchPageContent } from "../../store/actions";
import Title from "../../components/Title";
import Testimonial from "./Testimonial";
import Navigator from "./Navigator";
import { connect } from 'react-redux';
import { getContent } from "../../store/reducer";

class Page1 extends React.Component {
    state = {
        active: 1
    }

    componentDidMount() {
        store.dispatch(
            fetchPageContent(
                'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json',
                'page-1'
            )
        )
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

const mapStateToProps = (state) => ({
    slider: getContent(state, 'page-1', 'slider')
})

export default connect(mapStateToProps) (Page1)