import {React, useEffect, useState} from 'react'
import axios from 'axios';

import Sushi from './Sushi';
import Burger from './Burger';
import './products.css'

export default function Products() {


    useEffect(()=>{


    })

    const handleStock = (props) =>{
        console.log(props)
    }



    return (



        <div className="container-product" style={{paddingLeft: '150px', paddingRight: '50px'}}>
            <h3>Produtos</h3>

            
            <Sushi />
            <Burger />
            
        </div>
    )
}
