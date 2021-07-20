import React, { Component } from 'react'

export default class caroussel extends Component {
    render() {
        return (
            
			<div className="untitled">
				<div className="untitled__slides">
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>London</span> 
							<span>Scout</span>
							<a className="button" href="https://unsplash.com/@scoutthecity" target="/black">Unsplash Profile</a>
						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							
							<span>Vladimir</span> 
							<span>Kudinov</span>
							<a className="button" href="https://unsplash.com/@madbyte" target="/black">Unsplash Profile</a>
						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>Macio</span> 
							<span>Amorim</span>
							<a className="button" href="https://unsplash.com/@maicoamorim" target="/black">Unsplash Profile</a>
						</div>
					</div>
				
				</div>
				<div className="untitled__shutters"></div>
			</div>
        )
    }
}
