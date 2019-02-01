import React from "react";
import { number } from "prop-types"

class CalculatorResults extends React.Component {
    static propTypes = {
        monthlySpending: number.isRequired,
        employees: number.isRequired,
    }

    calculateFoodSavings = () => Math.round(this.props.monthlySpending * 0.3 * 10) / 10
    calculateAnnualSavings = () => (this.props.employees*1337) + this.calculateFoodSavings()

    render() {
        return (
            <div className='flex-grid'>
                <div className="col">
                    <p className="calculator-results">$ {this.calculateFoodSavings()}</p>
                    <p className="calculator-results-description">Estimated Cost Food Saving</p>
                </div>
                <div className="col">
                    <p className="calculator-results">$ {this.calculateAnnualSavings()}</p>
                    <p className="calculator-results-description">Your Estimated Annual Savings</p>
                </div>
            </div>
        )
    }
}

export default CalculatorResults