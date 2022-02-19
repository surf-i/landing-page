import React from 'react'
import './styles/Footer.css'

class Footer extends React.Component{
    render(){
        return(
        <footer className="component-container footer" id="Footer">
			<div className="footer-container">
				<p className="footer-text">Copyright © 2021 Curso PMP</p>
			</div>
		</footer>
        )
    }
}

export default Footer