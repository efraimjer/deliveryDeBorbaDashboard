import {React, useEffect, useState, useRef} from 'react'
import axios from 'axios';
import '../App.css'

export default function Archive() {

    let btnRef = useRef();
    const[orders, setOrders] = useState([])
    const[wppLink, setWppLink] = useState('')
    

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/getOrder')
        .then(res=>setOrders(res.data.sort((a, b) => (a.time < b.time) ? 1 : -1)));

    },[])

    const checkAvailability = (order) =>{
        return order.onRoute;
    }

    const ready = orders.filter(order=>checkAvailability(order))


    return (
        <div className="orders" style={{paddingLeft: '100px'}}>
            {ready.map(order=>(
                <div className="order-box" style={{backgroundColor: order.onRoute ? 'lightgreen' : 'white' }} >
                    

                    <div className="flex-row" style={{justifyContent: "space-around"}}>
                        
                        <div className="light"></div>                        
                        
                        
                    </div>
                    <p >Nº {order._id.slice(order._id.length - 4, order._id.length)} {order.time}</p>
                    <h4>{order.name} -- {order.phone}</h4>
                    <p><em>{order.adress}  {order.neighborhood} -- {order.option}</em></p>
                    <p style={{color: '#fc4041' }}>{order.cep ?'Cep  '+ order.cep : null}</p>
                    {order.cart.map(cart=>(
                        <div className="flex-row">
                            <p>{cart.quantity+ 'x'} {'cód ' + cart.code} {cart.name}</p>
                            <div className="flex-column">
                            {cart.extrasCart.map(extra=>(
                                
                                    <p style={{color: 'green', marginBottom: '-20px'}}>{extra.quantity + 'x'} - {extra.name}</p>
                                
                            ))}
                            
                            <p style={{color: "red"}}><em> {cart.point}</em></p>
                            <p><em>{cart.observation}</em></p>
                            </div>
                            
                            <p>R$ {(parseFloat(cart.subTotal) + parseFloat(cart.extrasPrice)).toFixed(2)}</p>
                        </div>

                    ))}

                    
                    <p>{ order.frete ? 'Frete - R$ ' + order.frete.toFixed(2) : null}</p>                   
                    <h3 style={{color: 'darkgreen'}}>R$ {order.total.toFixed(2)}</h3>



                
                 </div>
            ))}

            
        </div>
    )
}
