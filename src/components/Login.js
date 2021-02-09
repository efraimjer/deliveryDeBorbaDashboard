import {React, useState} from 'react'
import "../App.css"

export default function Login(props) {

    const[user, setUser] = useState('')
    const[senha, setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(user === "efraim" && senha === "1234" ){
            props.setLoggedIn(true)

        }
        else if(user === "admin" && senha === "deborba123"){
            props.setLoggedIn(true)
        }
        else alert("Senha ou usuário Errados")
    }

    return (
        <div className="log-box">
            <div className="form-holder">
                <h3>Bem Vindo</h3>
                <form>
                    <input type="String" placeholder="Usuário" 
                    onChange={(e)=>{setUser(e.target.value)}}/>
                    <input type="Password" placeholder="Senha" 
                    onChange={(e)=>{setSenha(e.target.value)}}/>

                    <input type="Submit" value="Entrar" onClick={(e)=>handleSubmit(e)} />
                </form>
            </div>

            
        </div>
    )
}
