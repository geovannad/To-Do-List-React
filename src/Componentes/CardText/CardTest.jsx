import {Div, Input } from './CardText'
import { useState } from 'react'; 

function CardContador(props){
    const [name, setName] = useState("")
    
    return(
        <Div>
            <h1>{props.title}</h1>
            <Input onChange={(e) => setName(e.target.value)}/>
            <h1>{name}</h1>
        </Div>
        
    );
}

export default CardContador