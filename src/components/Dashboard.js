import {React, useEffect, useState} from 'react'
import '../App.css';
import Orders from './Orders';
import Totals from './Totals'
import Products from './Products'
import Archive from './Archive'
import Shop from './ShopGer'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  BrowserHistory,
  Switch,
  useHistory

} from "react-router-dom";


import {FaCashRegister, FaBoxes, FaMoneyCheckAlt} from 'react-icons/fa'
import{AiOutlineShop,AiFillShop} from 'react-icons/ai'

export default function Dashboard() {

    const[dayTotal, setDayTotal] = useState(0);
    const[counted, setCounted] =useState([])
    const[showModal, setShowModal] = useState(false)

    




    return (
    <div className="App">
      <Router>
        <Switch>
          <div className="container">
            <div className="side-bar">

              <Link to="/pedidos">
                <div className="sidebar-box">
                  <FaCashRegister className="sidebar-icon" />
                  <p className="sidebar-label">Pedidos</p>
                </div>
              </Link>

              <Link to="/estoque">
                <div className="sidebar-box">
                  <FaBoxes className="sidebar-icon" />
                  <p className="sidebar-label">Produtos</p>
                </div>
              </Link>

              <Link to="/fechar">
                <div className="sidebar-box">
                  <FaMoneyCheckAlt className="sidebar-icon" />
                  <p className="sidebar-label">Arquivo</p>
                </div>
              </Link>

              
                <div className="sidebar-box" onClick={()=>setShowModal(true)}>
                  <AiFillShop className="sidebar-icon" />
                  <p className="sidebar-label">Gerenciar <br></br>Loja</p>
                </div>
              



            </div>
            <div className="board">
              <Route path="/pedidos">
                <Orders
                setDayTotal={setDayTotal}
                dayTotal={dayTotal}
                setCounted={setCounted}
                />    
              </Route>

              <Route path="/estoque">
                <Products />
              </Route>

              <Route path="/fechar">
                <Archive />
              </Route>

            </div>
            {/* <div className="right-box">
                <Totals 
                dayTotal={dayTotal}
                counted={counted}
                />
                
            </div>             */}
          </div>
          </Switch>
        </Router>

        <div style={{display: showModal ? 'flex' : 'none'}} className="modal">
          <div className="modal-box">
            <p onClick={()=>setShowModal(false)}>x fechar</p>
            <Shop 
            setShowModal = {setShowModal}
            />
          </div>
        </div>
      </div>
    )
}
