import React from 'react'
import Menu from './Menu'
import './styles/Header.css'

const Header = () =>{
        return(
        <header className="component-container header" id="Header">
            {/* <div className="header-title">
                <h2 className="header-text">Cursos</h2>
            </div> */}
            <Menu/>
		</header>
        )
}

export default Header