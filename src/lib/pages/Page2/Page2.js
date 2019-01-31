import React from "react";
import axios from "axios";
import store from "../../store/store";
import _get from "lodash/get"
import {addCalculator} from "../../store/actions";
import Title from "../../components/Title";

class Page2 extends React.Component {
    state = {
        calculator: {},
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
            .then(response => {
                const data = response.data.calculator;
                store.dispatch(addCalculator('page-2', data.title, data.description));
            })

        store.subscribe(() => {
           this.setState({
              calculator: _get(store.getState(), `pages[page-2].calculator`, {})
           });
        });
    }

    render() {
        console.log(this.state)
        const { calculator } = this.state
        const { description, title} = calculator
        return <React.Fragment>
            <Title title={title} />
        </React.Fragment>

    }
}

export default Page2