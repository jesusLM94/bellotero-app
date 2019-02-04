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
        monthlySpending: 0,
        employees: 1,
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
            .then(response => {
                const data = response.data.calculator;
                store.dispatch(addCalculator('page-2', data.title, data.description));
            })

        // 1. Replace ´store.subscribe´ by redux connect
        // 2. Add selectors
        store.subscribe(() => {
           this.setState({
              calculator: _get(store.getState(), `pages[page-2].calculator`, {})
           });
        });
    }

    updateMonthlySpending = monthlySpending => this.setState({monthlySpending: parseInt(monthlySpending)})
    updateEmployees = employees => this.setState({employees: parseInt(employees)})

    render() {
        const { calculator, monthlySpending, employees } = this.state
        const { description, title} = calculator
        const monthlyMinRange = 10
        const employeesMinRange = 10

        return <div className='flex-grid'>
            <div className='col'>
                <Title title={title} />
                <CalculatorDescription description={description} />
            </div>
            <div className='col calculator-container'>
                <div className='flex-grid column-direction'>
                    <InputCalculator value={monthlySpending || monthlyMinRange} name={'Monthly Ingredient Spending'}/>
                    <RangeControlSlider value={monthlySpending || monthlyMinRange} min={monthlyMinRange} max={100} onChange={this.updateMonthlySpending}/>
                </div>
                <div className='flex-grid column-direction'>
                    <InputCalculator value={employees || employeesMinRange} name={'Full-time Employees that process invoices'}/>
                    <RangeControlSlider value={employees || employeesMinRange} min={1} max={10} onChange={this.updateEmployees}/>
                </div>
                <CalculatorResults monthlySpending={monthlySpending} employees={employees}/>
            </div>
        </div>

    }
}

export default Page2