import {React, useEffect, useState} from 'react'
import axios from 'axios';

export default function Entries() {
    const[entries, setEntries] = useState([])


    useEffect(()=>{
        
        axios.get('https://delivery-deborba.herokuapp.com/delivery/entries')
            .then(res=> {setEntries(res.data)});
    })

    const handleAvailability = (product) =>{

        
        if(product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/entriesUnavailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    const handleNotAvailability = (product) =>{

        if(!product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/entriesAvailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    return (
        <div>
            <h2>Entradas</h2>
            {entries.map(entries=>(
                <div className="sushi-box">
                    <p>cód: {entries.code}</p>
                    <p>{entries.name}</p>
                    <button onClick={() => handleAvailability(entries)} style={{display: entries.isAvailable ? 'block' : 'none'}}>Disponível</button>
                    <button onClick={() => handleNotAvailability(entries)} style={{display: entries.isAvailable ? 'none' : 'block'}}>Não Disponível</button>
                </div>
            ))}
        </div>
    )
}
