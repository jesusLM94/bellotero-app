import React from "react";
import { fetchPageContent, changeMonthlySpending, changeEmployeesNumber} from "../../store/actions";
import Title from "../../components/Title";
import CalculatorDescription from "./CalculatorDescription";
import InputCalculator from "./inputCalculator";
import CalculatorResults from "./CalcultatorResults";
import RangeControlSlider from "./RangeControlSlider";
import { connect } from 'react-redux';
import { getContent, getEmployeesNumber, getMonthlySpending } from "../../store/reducer";

class Page2 extends React.Component {

    componentDidMount() {
        this.props.fetchPageContent(
            'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json',
            'page-2'
        );
    }

    render() {
        const { calculator, monthlySpending, employees } = this.props
        const { description, title} = calculator
        const updateMonthlySpending = monthlySpending => this.props.changeMonthlySpending(parseInt(monthlySpending))
        const updateEmployees = employees => this.props.changeEmployeesNumber(parseInt(employees))
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
                    <RangeControlSlider value={monthlySpending || monthlyMinRange} min={monthlyMinRange} max={100} onChange={updateMonthlySpending}/>
                </div>
                <div className='flex-grid column-direction'>
                    <InputCalculator value={employees || employeesMinRange} name={'Full-time Employees that process invoices'}/>
                    <RangeControlSlider value={employees || employeesMinRange} min={1} max={10} onChange={updateEmployees}/>
                </div>
                <CalculatorResults monthlySpending={monthlySpending} employees={employees}/>
            </div>
        </div>

    }
}

const mapStateToProps = (state) => ({
    calculator: getContent(state, 'page-2', 'calculator'),
    monthlySpending: getMonthlySpending(state),
    employees: getEmployeesNumber(state),
})

const mapDispatchToProps = {
    fetchPageContent: fetchPageContent,
    changeMonthlySpending: changeMonthlySpending,
    changeEmployeesNumber: changeEmployeesNumber,
}

export default connect(mapStateToProps, mapDispatchToProps) (Page2)