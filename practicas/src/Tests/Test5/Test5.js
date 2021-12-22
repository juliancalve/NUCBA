import { useState } from 'react'

const Test5 = () => {

    const [numbers, setNumbers] = useState([]);

    const onSetNumbers = (nums) => {
        // Must set Numbers
    }

    const isCapicua = () => {
        // Must return true if numbers is capicua and return false if isn't
        return {};
    }

    const getQuantityOfNumbers = (num) => {
        // Must return the number of times it is repeated in the state
        return {};
    }



    return {
        onSetNumbers,
        isCapicua,
        getQuantityOfNumbers,
        numbers
    }
}

export default Test5
