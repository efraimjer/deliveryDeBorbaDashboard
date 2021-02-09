import {React, useEffect, useState} from 'react'
import axios from 'axios';

export default function Sushi() {

    const[sushi, setSushi] = useState([]);

    useEffect(()=>{

        axios.get('https://delivery-deborba.herokuapp.com/delivery/sushi')
            .then(res=> {setSushi(res.data)})

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
            axios.post('https://delivery-deborba.herokuapp.com/delivery/updateSushi/' + product._id, {isAvailable: false})
                .then(res=> console.log(res))
        }
    }

    const handleNotAvailability = (product) =>{
        console.log(product)

        var Available ={
            isAvailable: true
        }


        if(!product.isAvailable){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/updateSushi/' + product._id, Available)
                .then(res=> console.log(res))
        }
    }


    return (
        <div>
            <h2>Sushis</h2>
            {sushi.map(sushi=>(
                <div className="sushi-box">
                    <p>cód: {sushi.code}</p>
                    <p>{sushi.name}</p>
                    <button onClick={() => handleAvailability(sushi)} style={{display: sushi.isAvailable ? 'block' : 'none'}}>Disponível</button>
                    <button onClick={() => handleNotAvailability(sushi)} style={{display: sushi.isAvailable ? 'none' : 'block'}}>Não Disponível</button>
                </div>
            ))}
            
        </div>
    )
}
