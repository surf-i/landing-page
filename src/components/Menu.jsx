import React from 'react'
import { MdAccountCircle, MdHome } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'
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
                    <button onClick={()=>{toPush("/dashboard")}} className="Menu-item">
                        <MdAccountCircle className="Menu-item-icon"/>    
                        <p className="Menu-item-text">About us</p>
                    </button>
                    <button onClick={()=>{toPush("/courses")}} className="Menu-item">
                        <BsFillCollectionFill className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Our Impact</p>
                    </button>
                    
                </div>
        )
    }

export default Menu