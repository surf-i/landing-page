import React from 'react'
import { MdOutlineSurfing } from 'react-icons/md'
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
                            <div id="HomeDescription">
                                <h2 id='HomeDescription-title'>Surfi</h2>
                                <p id='HomeDescription-text'>Improve UX when surfing on internet and optimize use of web content.
Discover a new internet surfing experience by innovating current searching tools.
Save internet users time and prevent misinformation.
Provide a tool for websites to know what their users think about them.</p>
                            </div>
                            <div id="HomeLogo">
                                <MdOutlineSurfing id="HomeItem-icon"/>    
                            </div>
                        </section>
                </div>
            )
    }
}

export default Home