import React, { Component } from 'react'
import css from './styles.css'

import Map from './Map.js'

import imgLI from '../../img/icon_in.png'
import imgIG from '../../img/icon_ig.png'
import imgTW from '../../img/icon_tw.png'

class Contact extends Component {
	render() {
		const location = {
			lat: 40.7440334,
			lng: -73.9954773
		}

		const markers = [
			{
				location: {
					lat: 40.7440334,
					lng: -73.9954773
				}
			}
		]

		return(
			<div className="contactWrapper">
				<div className="fixed-left">
					<p>c o n t a c t</p>
				</div>
				
				<div className="contact-wrapper">
					<div className="contact-content">
						<div className="email">
							<a href="mailto:bae.annie@gmail.com?subject=Hi Annie!&body=Sent from anniebae.com">say hello</a>
						</div>

						<div className="social">
							<ul>
								<li><a href="https://www.linkedin.com/in/anniebae/" target="_blank"><img className="images" src={imgLI} /></a></li>
								<li><a href="https://www.instagram.com/anniebae/" target="_blank"><img className="images" src={imgIG} /></a></li>
								<li><a href="https://twitter.com/bae_annie" target="_blank"><img className="images" src={imgTW} /></a></li>
							</ul>
						</div>

						<div className="map-wrapper">
							<Map center={location} markers={markers} />
						</div>
						
					</div>
				</div>

			</div>
		)
	}
}

export default Contact