const Button = ({text, miFuncion}) => {

    return (
            <button onClick={miFuncion} type='button'>{text}</button>
    )
}

export default Button

