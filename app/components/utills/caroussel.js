import React, { Component } from 'react'

export default class caroussel extends Component {
    render() {
        return (
            
			<div className="untitled">
				<div className="untitled__slides">
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>INGENIEUR EN INFORMATIQUE</span> 
							<div>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
							</div>
							<div className="arrow"></div>						
						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							
							<span>CRÉATION DE SITES WEB</span> 
							<p>Sites vitrine, logiciels WEB, sites évennementiels</p>
							<div className="arrow"></div>	

						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>ENSEMBLE, DONNONS VIE À VOS RÊVES</span> 
							<div className="emojis"> 😉 😉 😉</div>
							<div className="arrow"></div>	
						</div>
					</div>
				
				</div>
				<div className="untitled__shutters"></div>
			</div>
        )
    }
}
