import React, { useReducer } from 'react'

const initialValues = {
    number1:0,
    number2:0,
    result:0
}

function calcReducer(state,action){
    switch(action.type){
        case "SET_NUMBER1":
            return {...state, number1 : action.payload};
        case "SET_NUMBER2":
            return {...state, number2 : action.payload};
        case "SET_RESULT" :
            return {...state, result : action.payload};
        case "SET_MULTIPLE" : 
            return {...state, result : action.payload};
        case "SET_MINUS":
            return {...state, result : action.payload};
        case "SET_DIVIDE":
            return {...state, result : action.payload};
        default:
            return state;
    }
}

const CalculateReducer = () => {

    const [state,dispatch] = useReducer(calcReducer,initialValues);

    const changeNumber1Input = (e) => {
        dispatch({type : "SET_NUMBER1", payload : Number(e.target.value)});
    }

    const changeNumber2Input = (e) => {
        dispatch({type : "SET_NUMBER2", payload : Number(e.target.value)});
    }

    const handleAdded = () => {
        dispatch({type : "SET_RESULT", payload : state.number1 + state.number2})
    }

    const handleMultiple = () => {
        dispatch({type : "SET_MULTIPLE", payload : state.number1 * state.number2})
    }

    const handleMinus = () => {
        dispatch ({type : "SET_MINUS", payload : state.number1 - state.number2})
    }
    const handleDivide = () => {
        dispatch({type : "SET_DIVIDE", payload : state.number1 / state.number2})
    }

  return (
    <div className='calculate-wrapper'>
        <h2>Calculate REDUCER</h2>
        <div className='calculate-form'>
            <div className="form-group">
                <label htmlFor="number1">Number1</label>
                <input type="text" id='number1' value={state.number1} onChange={changeNumber1Input} />
            </div>
            <div className="form-group">
                <label htmlFor="number2">Number1</label>
                <input type="text" id='number2' value={state.number2} onChange={changeNumber2Input} />
            </div>
            <button className='add-button' onClick={handleAdded}>Added</button>
            <button className='add-button' onClick={handleMinus}>Minus</button>
            <button className='multiple-button' onClick={handleMultiple}>Multiple</button>
            <button className='multiple-button' onClick={handleDivide}>Divide</button>
            <div className="form-group">
                <label htmlFor="result">Number1</label>
                <input type="text" id='result' value={state.result} readOnly />
            </div>
        </div>
    </div>
  )
}

export default CalculateReducer