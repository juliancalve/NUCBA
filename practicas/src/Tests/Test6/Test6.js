import { useState } from 'react'

const Test6 = () => {

    const [matrix, setMatrix] = useState([]);

    const onSetMatrix = (text) => {
        // Must set Matrix with text, for example, text = 'hola' matrix must be [ ['h'], ['o'], ['l'], ['a'] ]
        // And must exclude spaces, for example, text = 'p    ep        e', matrix must be [ ['p'], ['e'], ['p'], ['e'] ]
    }

    const getPositionOfCharacter = (character) => {
        // Must return Position of the first character, for example array = [['h'], ['o'], ['l'], ['a']], and character is 'l', must return 2
    }

    const transformMatrixToUpperCaseAndLowerCase = () => {
        // Must set matris to UpperCase and LowerCase, for example, [['h'], ['o'], ['l'], ['a']] = [['H'], ['o'], ['L'], ['a']]
        // First UpperCase, then LowerCase, and keep going
    }

    return {
        matrix,
        onSetMatrix,
        getPositionOfCharacter,
        transformMatrixToUpperCaseAndLowerCase
    }
}

export default Test6
