
import {React, useEffect, useState} from 'react'
import axios from 'axios';



export default function Drinks() {

    const[drink, setDrink] = useState([])


    useEffect(()=>{
        
        axios.get('https://delivery-deborba.herokuapp.com/delivery/drinks')
            .then(res=> {setDrink(res.data)});
    })

    const handleAvailability = (product) =>{

        
        if(product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/drinkUnavailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    const handleNotAvailability = (product) =>{

        if(!product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/drinkAvailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    return (
        <div>
            <h2>Bebidas</h2>
            {drink.map(drink=>(
                <div className="sushi-box">
                    <p>cód: {drink.code}</p>
                    <p>{drink.name}</p>
                    <button onClick={() => handleAvailability(drink)} style={{display: drink.isAvailable ? 'block' : 'none'}}>Disponível</button>
                    <button onClick={() => handleNotAvailability(drink)} style={{display: drink.isAvailable ? 'none' : 'block'}}>Não Disponível</button>
                </div>
            ))}
        </div>
    )
}
