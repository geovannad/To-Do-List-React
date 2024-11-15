import {Div, DivButton, Button, LI } from './CardContador'
import { useState } from 'react'; 
import Li from '../LI/LI.jsx'
function CardContador(props){
    const [number, setNumber] = useState(0)
    return(
        <Div>
            <h1>{props.title}</h1>
            <p>{props.description}: {number}</p>
            <DivButton>
                <Button onClick={() => setNumber(number + 1)}>Incrementar</Button>
                <Button onClick={() => setNumber (number - 1)}>Descrementar</Button>
            </DivButton>
           
        </Div>
    );
}

export default CardContador