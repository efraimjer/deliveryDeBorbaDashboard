import {React, useEffect, useState} from 'react'
import axios from 'axios';

export default function Burger() {

    const[burger, setBurger] = useState([])


    useEffect(()=>{
        
        axios.get('https://delivery-deborba.herokuapp.com/delivery/burger')
            .then(res=> {setBurger(res.data)});
    })

    const handleAvailability = (product) =>{
        console.log(product)

        var Available = {
            code: product.code,
            name: product.name,
            short: product.short,
            long: product.long,
            photo: product.photo,
            pontuation: product.pontuation,
            price: product.price,
            isAvailable: false,
            table: product.table,
            mode: product.mode,
            group: product.group
        }
        
        if(product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/burgerUnavailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    const handleNotAvailability = (product) =>{
        console.log(product)

        var Available ={
            isAvailable: true
        }


        if(!product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/burgerAvailable/' + product._id)
                .then(res=> console.log(res))
        }
    }

    return (
        <div>
            <h2>Burger</h2>
            {burger.map(burger=>(
                <div className="sushi-box">
                    <p>cód: {burger.code}</p>
                    <p>{burger.name}</p>
                    <button onClick={() => handleAvailability(burger)} style={{display: burger.isAvailable ? 'block' : 'none'}}>Disponível</button>
                    <button onClick={() => handleNotAvailability(burger)} style={{display: burger.isAvailable ? 'none' : 'block'}}>Não Disponível</button>
                </div>
            ))}
        </div>
    )
}
