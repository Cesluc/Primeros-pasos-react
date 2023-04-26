import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        // console.log(event);
        // setCounter(counter + 1);
        setCounter((c) => c + 1)
    }

    const handleSubstract = () => setCounter(counter - 1)


    const handleReset = () => setCounter(value)



    return (
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p>
            {/* <button onClick={(event) => handleAdd(event, 'Hola')}> */}
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}