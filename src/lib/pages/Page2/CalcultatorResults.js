import React from "react";
import { string } from "prop-types"

class CalculatorResults extends React.Component {
    static propTypes = {
        monthlySpending: string.isRequired,
        employees: string.isRequired,
    }

    calculateFoodSavings = () => this.props.monthlySpending * 0.3
    calculateAnnualSavings = () => (this.props.employees*1337) + this.calculateFoodSavings()

    render() {
        return (
            <div className='flex-grid'>
                <div class="col">
                    <h3>$ {this.calculateFoodSavings()}</h3>
                    <p>Estimated Cost Food Saving</p>
                </div>
                <div class="col">
                    <h3>$ {this.calculateAnnualSavings()}</h3>
                    <p>Your Estimated Annual Savings</p>
                </div>
            </div>
        )
    }
}

export default CalculatorResults