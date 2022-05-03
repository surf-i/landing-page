import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Layout (props){
    return(
        <React.Fragment>
            <Header/>
            <div className="Layout-container" id="Layout">
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout