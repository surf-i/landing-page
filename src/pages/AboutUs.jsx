import React from 'react'
import './styles/AboutUs.css'

class AboutUs extends React.Component{
    render(){
        return(
                <div className="Page-container" id="AboutUs">
                        <section id="AboutUsImg">
                            <div>
                                <h1 id="AboutUsImg-title">Surfi</h1>
                                <p id="AboutUsImg-text">Surf the web in a new way</p>
                            </div>
                        </section>
                        <section id="AboutUsInfo">
                            <h1 id="AboutUsInfo-title">Mision</h1>
                            <p  id="AboutUsInfo-text">Mejorar la experience de busqyeda en intenet</p>
                            <h1 id="AboutUsInfo-title">Vision</h1>
                            <p  id="AboutUsInfo-text">Lograr vivir en un mundo con informacion bien distribuida</p>
                            <h1 id="AboutUsInfo-title">Integrantes</h1>
                            <p  id="AboutUsInfo-text">
                                Juan Andres
                                Juan Carlitos
                                Juan Alegria
                                Luccas
                                Laura
                                David
                            </p>


                        </section>
                </div>
            )
    }
}

export default AboutUs