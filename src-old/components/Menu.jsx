import React from 'react'
import { MdAccountCircle, MdHome } from 'react-icons/md'
import { FaBicycle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './styles/Menu.css'



function Menu (){
    let navigate = useNavigate()
    function toPush(route){
        navigate(route)
    }

        return(
                <div className="Menu">
                    <button onClick={()=>{toPush("/")}} className="Menu-item">
                        <MdHome className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Home</p>
                    </button>
                    <button onClick={()=>{toPush("/aboutus")}} className="Menu-item">
                        <MdAccountCircle className="Menu-item-icon"/>    
                        <p className="Menu-item-text">About us</p>
                    </button>
                    <button onClick={()=>{toPush("/ourimpact")}} className="Menu-item">
                        <FaBicycle className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Our Impact</p>
                    </button>
                    
                </div>
        )
    }

export default Menu