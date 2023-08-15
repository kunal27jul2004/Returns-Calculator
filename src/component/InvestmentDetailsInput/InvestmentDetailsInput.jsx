import FormContainer from "./style";
import {useState} from "react";

const InvestmentDetailsInput = (props) => {
    // let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput['expected-return'] / 100;
    // const duration = +userInput['duration'];

    // for (let i = 0; i < duration; i++) {
        //   const yearlyInterest = currentSavings * expectedReturn;
        //   currentSavings += yearlyInterest + yearlyContribution;
        //   yearlyData.push({
        //     // feel free to change the shape of the data pushed to the array!
        //     year: i + 1,
        //     yearlyInterest: yearlyInterest,
        //     savingsEndOfYear: currentSavings,
        //     yearlyContribution: yearlyContribution,
        //   });
        // }

    const [currentSavings, setCurrentSavings] = useState(0);
    const [yearlyContribution, setYearlyContribution] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    const currentSavingsChangeHandler = (event) => {
        setCurrentSavings(+event.target.value);
    }

    const yearlyContributionChangeHandler = (event) => {
        setYearlyContribution(+event.target.value);
    }

    const expectedReturnChangeHandler = (event) => {
        setExpectedReturn(+event.target.value);
    }

    const durationChangeHandler = (event) => {
        setDuration(+event.target.value);
    }

    const getData = () => {
        const yearlyData = [];
        let totalSavings = currentSavings;
        let totalInterest = 0;

        for (let i = 0; i < duration; i++) {
              const yearlyInterest = totalSavings * expectedReturn;
              totalInterest += yearlyInterest;
              totalSavings += yearlyInterest + yearlyContribution;
              yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest,
                savingsEndOfYear: totalSavings,
                yearlyContribution,
                totalInterest
              });
        }

        return yearlyData;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentSavings && yearlyContribution && expectedReturn && duration){
            const data = getData();
            props.onDataFetch(data);
            return;
        }
        props.onDataFetch([]);
    }

    return (
        <FormContainer className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingsChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={durationChangeHandler} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </FormContainer>
    )
}

export default InvestmentDetailsInput;