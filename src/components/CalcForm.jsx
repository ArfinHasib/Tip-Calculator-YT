const CalcForm = ({ state, handleChange, calculateTotalAmount }) => {
    const predefinedTipPercentage = [10, 15, 20, 25];

    return (
        <div className='tip-calculator'>
            <h1>Tip Calculator</h1>
            <div className='form-group'>
                <label>Bill Amount: </label>
                <input
                    type='number'
                    value={state.billAmount}
                    name='billAmount'
                    onChange={handleChange}
                />
            </div>

            <div className='form-group'>
                <label>Tip Percentage: </label>
                <select
                    type='number'
                    value={state.tipPercentage}
                    name='tipPercentage'
                    onChange={handleChange}
                >
                    <option value=''>Custom</option>
                    {predefinedTipPercentage.map((percentage) => (
                        <option value={percentage} key={percentage}>
                            {percentage}%
                        </option>
                    ))}
                </select>
                {!state.tipPercentage && (
                    <input
                        type='number'
                        name='customTipPercentage'
                        onChange={handleChange}
                        value={state.customTipPercentage}
                        placeholder='Enter custom tip %'
                    />
                )}
            </div>

            <div className='form-group'>
                <label>Split Count: </label>
                <input
                    type='number'
                    value={state.splitCount}
                    name='splitCount'
                    onChange={handleChange}
                    min={"1"}
                />
            </div>

            <div className='checkbox-group'>
                <label>
                    <input
                        type='checkbox'
                        name='includeTax'
                        onChange={handleChange}
                        checked={state.includeTax}
                    />
                    Include Tax
                </label>
                {state.includeTax && (
                    <input
                        type='number'
                        name='taxPercentage'
                        placeholder='Enter tax %'
                        value={state.taxPercentage}
                        onChange={handleChange}
                    />
                )}
            </div>

            <button onClick={calculateTotalAmount}>Calculate</button>
            <div>
                <h2>
                    Total Amount: <span>{state.totalAmount}</span>
                </h2>
                <h2>
                    Tip Amount: <span>{state.tipAmount}</span>
                </h2>

                <h2>
                    Split Amount: <span>{state.splitAmount}</span>
                </h2>
            </div>
        </div>
    );
};

export default CalcForm;
