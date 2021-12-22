import { useState } from "react";

const NumberProblems = () => {
    
    const [ numbers, setNumbers ] = useState([]);
    const [ average, setAverage ] = useState(0);

    const addNumber = (num) => {
        setNumbers([...numbers, num]);
    }

    const getAverage = () => {
        let suma = 0;
        numbers.forEach( f => suma += f);
        setAverage(suma/numbers.length);
    }

    return {
        numbers,
        average,
        addNumber,
        getAverage
    }

}

export default NumberProblems;