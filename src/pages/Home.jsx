import React from 'react'
import './styles/Home.css'

class Home extends React.Component{
    render(){
        return(
                <div className="Page-container" id="Home">
                        <section id="HomeImg">
                            <div>
                                <h1 id="HomeImg-title">Surfi</h1>
                                <p id="HomeImg-text">Surf the web in a new way</p>
                            </div>
                        </section>
                        <section id="HomeInfo">
                            <h1 id="HomeInfo-title">Bienvenido!!</h1>
                            <p  id="HomeInfo-text">pideindo tequila</p>
                        </section>
                </div>
            )
    }
}

export default Home