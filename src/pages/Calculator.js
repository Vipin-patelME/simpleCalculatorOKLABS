import React, { useReducer } from 'react'
import { ADD, CALCULATION, DIGITS, DIVIDE, MULTI, RESET, SUB } from './reducer/actions'
import './style.css'

const initialValues = {
    leftValue:"",
    operator:"",
    rightValue:"",
    result:""
}

const calculationReducer = (state, action) =>{
    switch(action.type){
        case DIGITS:
            return{
                ...state,
                ...(state.operator !== "" ? {rightValue: state.rightValue + action.payload} : {leftValue: state.leftValue + action.payload} )
            }
        case ADD:
            return{
                ...state,
                operator:action.payload
            }
        case SUB:
            return{
                ...state,
                operator:action.payload
            }
        case MULTI:
            return{
                ...state,
                operator:action.payload
            }
        case DIVIDE:
            return{
                ...state,
                operator:action.payload
            }
        case CALCULATION:
            switch(state.operator){
                case "+":
                    return{
                        ...state,
                        result: parseFloat(state.leftValue) + parseFloat(state.rightValue) 
                    }
                case "-":
                    return{
                        ...state,
                        result: parseFloat(state.leftValue) - parseFloat(state.rightValue) 
                    }
                case "/":
                    return{
                        ...state,
                        result: parseFloat(state.leftValue) / parseFloat(state.rightValue) 
                    }
                case "*":
                    return{
                        ...state,
                        result: parseFloat(state.leftValue) * parseFloat(state.rightValue) 
                    }
                case "%":
                    return{
                        ...state,
                        result: (parseFloat(state.leftValue) * parseFloat(state.rightValue)) / 100
                    }
            }
        case RESET:
            return{
                leftValue:"",
                operator:"",
                rightValue:"",
                result:""
            }
        default:
            return state
    }
}



const Calculator = () => {

    const [values, dispatch] = useReducer(calculationReducer, initialValues)

    //console.log(values)
    const {leftValue, operator, rightValue, result} = values
  return (
    <>
        <div className='cal-body'>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbvs-M64aLq0qSF5jQNiI9rT5RGxR9B2Txw&usqp=CAU"
            alt='calculator'
            style={{width:"90px"}}
            />
            
            <input className='imput-style' type="text" value={result === "" ?(leftValue + operator + rightValue) : result} disabled />
            <div className='btn-cont'>
                <button onClick = {()=>{dispatch({type:RESET})}} style={{width:"80px", backgroundColor:"red", color:"white", fontSize:"20px", height:"35px", cursor:"pointer"}} type='button'>C</button>
                <button onClick = {()=>{dispatch({type:ADD, payload:"+"})}} className='cal-button' type='button'>+</button>
                <button onClick = {()=>{dispatch({type:SUB, payload:"-"})}} className='cal-button' type='button'>-</button>
                <button onClick = {()=>{dispatch({type:DIVIDE, payload:"/"})}} className='cal-button' type='button'>/</button>
                <button onClick = {()=>{dispatch({type:CALCULATION})}} style={{width:"80px", backgroundColor:"green", color:"white", fontSize:"20px", height:"35px", cursor:"pointer"}} type='button'>=</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:1})}} className='cal-button' type='button'>1</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:2})}}className='cal-button' type='button'>2</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:3})}}className='cal-button' type='button'>3</button>
                <button onClick = {()=>{dispatch({type:SUB, payload:"*"})}} style={{marginLeft:"70px"}} className='cal-button' type='button'>x</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:4})}}className='cal-button' type='button'>4</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:5})}}className='cal-button' type='button'>5</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:6})}}className='cal-button' type='button'>6</button>
                <button onClick = {()=>{dispatch({type:SUB, payload:"%"})}} style={{marginLeft:"70px"}} className='cal-button' type='button'>%</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:7})}}className='cal-button' type='button'>7</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:8})}}className='cal-button' type='button'>8</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:9})}}className='cal-button' type='button'>9</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:0})}} style={{marginLeft:"70px"}} className='cal-button' type='button'>0</button>
                <button className='cal-button' type='button'>&</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:"."})}}className='cal-button' type='button'>.</button>
                <button className='cal-button' type='button'>#</button>
                <button onClick = {()=>{dispatch({type:DIGITS, payload:"00"})}}style={{marginLeft:"70px"}} className='cal-button' type='button'>00</button>
            </div>
        </div>
    </>
  )
}

export default Calculator