import React from "react";
import axios from "axios";
import store from "../../store/store";
import _get from "lodash/get"
import {addCalculator} from "../../store/actions";
import Title from "../../components/Title";
import CalculatorDescription from "./CalculatorDescription";
import InputCalculator from "./inputCalculator";
import CalculatorResults from "./CalcultatorResults";
import RangeControlSlider from "./RangeControlSlider";

class Page2 extends React.Component {
    state = {
        calculator: {},
        monthlySpending: 10,
        employees: 1,
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

    updateMonthlySpending = monthlySpending => this.setState({monthlySpending})
    updateEmployees = employees => this.setState({employees})

    render() {
        const { calculator, monthlySpending, employees } = this.state
        const { description, title} = calculator
        return <div className='flex-grid'>
            <div className='col'>
                <Title title={title} />
                <CalculatorDescription description={description} />
            </div>
            <div className='col'>
                <div className='flex-grid'>
                    <RangeControlSlider name={'Monthly Ingredient Spending'} min={10} max={100} onChange={this.updateMonthlySpending}/>
                    <InputCalculator value={monthlySpending}/>
                </div>
                <div className='flex-grid'>
                    <RangeControlSlider name={'Full-time Employees that process invoices'} min={1} max={10} onChange={this.updateEmployees}/>
                    <InputCalculator value={employees}/>
                </div>
                <CalculatorResults monthlySpending={monthlySpending} employees={employees}/>
            </div>
        </div>

    }
}

export default Page2