const Title = ({text, subtitulo}) => {

    console.log({text, subtitulo});

    return(
        <div>
            <h1 >{text}</h1>
            
            {subtitulo && <h5>{subtitulo}</h5>}
        </div>
    )
};

export default Title;

//Tipos de export

// const TitleDefault = () => {
//     return(<h1>Soy Default</h1>);
// }

// export const Title = () => {

//     return(<h1>Soy un titulo asdasd</h1>)
// }

// export const Title2 = () => {
//     return(<h1>Soy un 2</h1>);
// }

// export default TitleDefault;

