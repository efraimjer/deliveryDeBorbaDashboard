import {React, useEffect, useState} from 'react'
import axios from 'axios';



export default function Steaks() {

    const[steak, setSteaks] = useState([])

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/stakes')
            .then(res=>{setSteaks(res.data)})
    })

    const handleAvailability = (product) =>{
        console.log(product)
        
        if(product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/steakUnavailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    const handleNotAvailability = (product) =>{
        
        if(!product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/steakAvailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    return (
        <div>
            <h2>Steaks</h2>
            {steak.map(steak=>(
                <div className="sushi-box">
                    <p>cód: {steak.code}</p>
                    <p>{steak.name}</p>
                    <button onClick={() => handleAvailability(steak)} style={{display: steak.isAvailable ? 'block' : 'none'}}>Disponível</button>
                    <button onClick={() => handleNotAvailability(steak)} style={{display: steak.isAvailable ? 'none' : 'block'}}>Não Disponível</button>
                </div>
            ))}
        </div>
    )
}
