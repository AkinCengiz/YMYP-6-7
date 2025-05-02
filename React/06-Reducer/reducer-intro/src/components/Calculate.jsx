import React, { useState } from 'react'

const Calculate = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    const changeNumber1Input = (e) => {
        setNumber1(Number(e.target.value));
    }
    const changeNumber2Input = (e) => {
        setNumber2(Number(e.target.value));
    }
    const handleAdded = () => {
        setResult(number1 + number2);
    }

  return (
    <div className='calculate-wrapper'>
        <h2>Calculate</h2>
        <div className='calculate-form'>
            <div className="form-group">
                <label htmlFor="number1">Number1</label>
                <input type="text" id='number1' value={number1} onChange={changeNumber1Input} />
            </div>
            <div className="form-group">
                <label htmlFor="number2">Number1</label>
                <input type="text" id='number2' value={number2} onChange={changeNumber2Input} />
            </div>
            <button className='add-button' onClick={handleAdded}>Add</button>
            <div className="form-group">
                <label htmlFor="result">Number1</label>
                <input type="text" id='result' value={result} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Calculate