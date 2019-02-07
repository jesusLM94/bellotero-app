import React from "react";
import { fetchPageContent, toggleActive } from "../../store/actions";
import Title from "../../components/Title";
import Testimonial from "./Testimonial";
import Navigator from "./Navigator";
import { connect } from 'react-redux';
import { getContent, getActive } from "../../store/reducer";

class Page1 extends React.Component {

    componentDidMount() {
        this.props.fetchPageContent(
            'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json',
            'page-1'
        );
    }

    render(){
        const { slider, active } = this.props
        const { title, reviews } = slider
        const total = reviews ? reviews.length : 0
        const toggleActive = active => this.props.toggleActive(active)

        return <React.Fragment>
            <Title title={title}/>
            <Testimonial reviews={reviews} active={active}/>
            <Navigator onChange={toggleActive} active={active} total={total}/>
        </React.Fragment>
    }
}

const mapStateToProps = (state) => ({
    slider: getContent(state, 'page-1', 'slider'),
    active: getActive(state),
})

const mapDispatchToProps = {
    fetchPageContent: fetchPageContent,
    toggleActive: toggleActive,
}

export default connect(mapStateToProps, mapDispatchToProps) (Page1)