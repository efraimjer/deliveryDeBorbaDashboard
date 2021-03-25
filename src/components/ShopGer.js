import {React, useEffect, useState} from 'react'
import axios from 'axios';
import '../App.css'

export default function ShopGer(props) {

    const [shop, setShop] = useState([])
    const [handleCloseShop, setHandleCloseShop] = useState(false)

    useEffect(() => {
        axios.get('https://delivery-deborba.herokuapp.com/delivery/shop')
            .then(res=>{setShop(res.data)})

    },[])

    const shopGer = {
        display: 'flex',
        width: '350px',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const shopGerDiv = {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '350px'
    }

    const btn ={
        width: '100px',
        height: '40px'
    }

    const closeShop = () =>{
        axios.post('https://delivery-deborba.herokuapp.com/delivery/closeShop')
        .then(res => console.log(res))

        setHandleCloseShop(false)

        alert('Sua Loja está Fechada!')

        props.setShowModal(false)
    }


    const handleShop =()=>{
        if(shop[0].isOpen){
            setHandleCloseShop(true)
        }

        else if(!shop[0].isOpen){
            axios.post('https://delivery-deborba.herokuapp.com/delivery/openShop')
            .then(res => console.log(res))

            alert('Sua Loja está Aberta!')

            props.setShowModal(false)
        }
    }
    return (
        <div style={shopGer}>

            <h4 style={{display: shop[0] ? shop[0].isOpen ? 'block' : 'none' : 'null'}}>Sua loja Está aberta deseja Fecha-la?</h4>
            <h4 style={{display: shop[0] ? !shop[0].isOpen ? 'block' : 'none' : 'null'}}>Sua loja Está fechada deseja abri-la?</h4>
            <div style={shopGerDiv}>
                <button onClick={handleShop} style={btn}>Sim</button>
                <button onClick={()=> props.setShowModal(false)} style={btn}>Não</button>
            </div>

            <div style={{display: handleCloseShop ? 'block' : 'none'}}>
                <p>Isso impedirá que os seus clientes façam pedidos pelo aplicativo até que você abra a loja novamente.</p>
                <h6>Deseja prosseguir?</h6>
                <div style={shopGerDiv}>
                <button onClick={closeShop} style={btn}>Sim</button>
                <button onClick={()=> props.setShowModal(false)} style={btn}>Não</button>
            </div>
            </div>

        </div>
    )
}
