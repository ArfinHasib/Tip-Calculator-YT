import { useState } from "react";
import CalcForm from "./CalcForm";
import "./style.css";

const TipCalculator = () => {
    const [state, setState] = useState({
        billAmount: "",
        tipPercentage: "",
        customTipPercentage: "",
        totalAmount: 0,
        tipAmount: 0,
        splitCount: 1,
        splitAmount: 0,
        includeTax: false,
        taxPercentage: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setState(
            (prevState) =>
                (prevState = {
                    ...prevState,
                    [name]: newValue,
                })
        );
    };

    const calculateTotalAmount = () => {
        let bill = parseFloat(state.billAmount);
        let tip = 0;

        if (state.includeTax) {
            tip = (bill * parseFloat(state.tipPercentage)) / 100;
        } else if (state.customTipPercentage) {
            tip = (bill * parseFloat(state.customTipPercentage)) / 100;
        }

        const total = bill + tip;
        const split = total / state.splitCount;

        setState({
            ...state,
            totalAmount: total.toFixed(2),
            tipAmount: tip.toFixed(2),
            splitAmount: split.toFixed(2),
        });
    };

    return (
        <div className='tip-calculator-container'>
            <CalcForm
                state={state}
                handleChange={handleChange}
                calculateTotalAmount={calculateTotalAmount}
            />
        </div>
    );
};

export default TipCalculator;
