import {React, useEffect, useState, useRef} from 'react'
import axios from 'axios';
import '../App.css'

export default function Orders(props) {

    let btnRef = useRef();
    const[orders, setOrders] = useState([])
    const[wppLink, setWppLink] = useState('')

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/getOrder')
            .then(res=>setOrders(res.data.sort()));
        
    })

    const handleTotal = () =>{
        let total = 0;
        let count = 0;
        

        orders.map(order=>(            

            total = total + order.total,
            count+=1
        

        ))

        props.setDayTotal(total)
        props.setCounted(count)

    }

    

    const handleOrderDelete = (order) =>{

        axios.post('https://delivery-deborba.herokuapp.com/delivery/deleteOrder/'+order._id)
        .then(res=> console.log(res))

    }

    const count = (item) =>{
        const count = {};

        

        item.forEach(item=>{
            item.cart.forEach(cart=>{
                count[cart.name]=(count[cart.name] || 0) +1
            })

        })

        
    
        return count;
    }

    handleTotal()

    const handleOutForDeliver = (phone, name) =>{
        setWppLink(
        'https://api.whatsapp.com/send?phone='+ phone +'&text=Ol%C3%A1,%20'+name+',%20tudo%20bem%3F%20Seu%20pedido%20acabou%20de%20sair%20para%20entrega%20-%20Obrigado%20-%20equipe%20deBorba.'
        )
    }



 



    

    return (
        <div className="orders" style={{paddingLeft: '100px'}}>
            {orders.map(order=>(
                <div className="order-box">
                    

                    <div className="flex-row" style={{justifyContent: "space-around"}}>
                        
                        <div className="light"></div>                        
                        <button ref={btnRef} 
                        onClick={()=>handleOrderDelete(order)}
                        className="btn" >Deletar</button>
                        <a href={wppLink} rel="noreferrer" target="_blank" onClick={()=>handleOutForDeliver(order.phone, order.name)}>Saiu para Entrega</a>
                    </div>
                    <p>Nº {order._id.slice(order._id.length - 4, order._id.length)}</p>
                    <h4>{order.name} -- {order.phone}</h4>
                    <p><em>{order.adress}, {order.neighborhood} -- {order.option}</em></p>
                    {order.cart.map(cart=>(
                        <div className="flex-row">
                            <p>{cart.code} {cart.name}</p>
                            <div className="flex-column">
                            {cart.extrasCart.map(extra=>(
                                
                                    <p style={{color: 'green', marginBottom: '-20px'}}>{extra.name}</p>
                                
                            ))}
                            
                            <p style={{color: "red"}}><em> {cart.point}</em></p>
                            </div>
                            <p>R$ {cart.subTotal.toFixed(2)}</p>
                        </div>

                    ))}

                    <h3 style={{color: 'darkgreen'}}>R$ {order.total.toFixed(2)}</h3>


                
                 </div>
            ))}

            
        </div>
    )
}
