import {React, useEffect, useState} from 'react'
import '../App.css';
import Orders from './Orders';
import Totals from './Totals'
import Products from './Products'

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

export default function Dashboard() {

    const[dayTotal, setDayTotal] = useState(0);
    const[counted, setCounted] =useState([])

    




    return (
    <div className="App">
      <Router>
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
                  <p className="sidebar-label">Estoque</p>
                </div>
              </Link>

              <Link to="/fechar">
                <div className="sidebar-box">
                  <FaMoneyCheckAlt className="sidebar-icon" />
                  <p className="sidebar-label">Fechar</p>
                </div>
              </Link>



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

            </div>
            <div className="right-box">
                <Totals 
                dayTotal={dayTotal}
                counted={counted}
                />
                
            </div>            
          </div>
        </Router>
      </div>
    )
}