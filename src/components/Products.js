import {React, useEffect, useState} from 'react'
import axios from 'axios';

import Sushi from './Sushi';
import Burger from './Burger';
import './products.css'

export default function Products() {


    useEffect(()=>{
        // axios.get('http://localhost:4000/delivery/sushi')
        //     .then(res=> {setSushi(res.data)})

        // axios.get('http://localhost:4000/delivery/burger')
        //     .then(res=> {setBurger(res.data)});

        // axios.get('http://localhost:4000/delivery/entries')
        //     .then(setEntries(res=> res.data));

        // axios.get('http://localhost:4000/delivery/stakes')
        //     .then(setSteaks(res=> res.data));

        // axios.get('http://localhost:4000/delivery/drinks')
        //     .then(setDrinks(res=> res.data));
            

    })

    const handleStock = (props) =>{
        console.log(props)
    }



    return (



        <div className="container-product" style={{paddingLeft: '150px', paddingRight: '50px'}}>
            <h3>Produtos</h3>
            <Sushi 
                
            />
            <Burger />
            
        </div>
    )
}
