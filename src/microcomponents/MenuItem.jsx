import React from 'react'
import { Link } from 'react-router-dom'
import './styles/MenuItem.css'

function MenuItem (props){
        return(
            <div className="MenuItem">
                    <Link to={props.link}>{props.title}</Link>
            </div>
        )
    }

export default MenuItem