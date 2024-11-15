import {Div, DivButton, Input } from './CardLista'
import { useState } from 'react'; 

function CardLista(props){
    const [number, setNumber] = useState({nome:"", idade:""})
    return(
        <Div>
            <h1>{props.title}</h1>
            <DivButton>
                <Input onChange={(e) => setNumber({...number, nome: e.target.value})}></Input>
                <Input onChange={(e) => setNumber({...number, idade: e.target.value})}></Input>
            </DivButton>
            <h1>{number.nome}, {number.idade}</h1>
        </Div>
    );
}

export default CardLista