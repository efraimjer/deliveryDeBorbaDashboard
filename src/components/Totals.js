import React from 'react'
import '../App.css'

import SalesChart from './SalesChart'

export default function Totals(props) {


    return (
        <div className="totals">
            <p>Total de Hoje</p>
            <h1>R$ {props.dayTotal.toFixed(2)}</h1>
            <p style={{marginTop: '-40px', marginBottom: '-20px'}}>Nº de Pedidos {props.counted}</p>

            


                         
        </div>
    )
}
