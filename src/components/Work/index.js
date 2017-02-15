import React, { Component } from 'react'
import css from './styles.css'

import imgGH from '../../img/icon_gh.png'

import workEvault from '../../img/evault.png'

import projPortfolio from '../../img/portfolio.png'
import projTravelography from '../../img/travelography.png'
import projWhereto from '../../img/whereto.png'
import projWhiskers from '../../img/whiskers.png'

class Work extends Component {
	render() {
		return(
			<div className="workWrapper">
				<div className="fixed-left">
					<p>w o r k</p>
				</div>

				<div className="work-content">

					<div className="project-wrapper">
						<div className="project-section">
							<p className="project-name">
								<a href="http://evault.com/" target="_blank"><img src={imgGH} className="github-icon" alt="" />EVault.</a>
							</p>
							<img src={workEvault} className="project" alt=""/>
							<p className="framework">Episerver CMS @ Wire Stone</p>
						</div>

						<div className="project-section">
							<p className="project-name">
								<a href="https://github.com/anniebae/anniebae.github.io" target="_blank"><img src={imgGH} className="github-icon" alt="" />This.</a>
							</p>
							<img src={projPortfolio} className="project" alt=""/>
							<p className="framework">Framework: React.js</p>
						</div>

						<div className="project-section">
							<p className="project-name">
								<a href="https://github.com/anniebae/travelography" target="_blank"><img src={imgGH} className="github-icon" alt="" />Travelography.</a>
							</p>
							<img src={projTravelography} className="project" alt=""/>
							<p className="framework">Framework: Backbone.js</p>
						</div>

						<div className="project-section">
							<p className="project-name">
								<a href="https://github.com/anniebae/WhereTO" target="_blank"><img src={imgGH} className="github-icon" alt="" />WhereTO.</a>
							</p>
							<img src={projWhereto} className="project" alt=""/>
							<p className="framework">Collaborated with <a href="https://evturn.com/" target="_blank">evturn</a>.</p>
						</div>

						<div className="project-section">
							<p className="project-name">
								<a href="https://github.com/anniebae/games" target="_blank"><img src={imgGH} className="github-icon" alt="" />Whiskers.</a>
							</p>
							<img src={projWhiskers} className="project" alt=""/>
							<p className="framework">Framework: Ruby on Rails</p>
						</div>
					</div>


				</div>
			</div>
		)
	}
}

export default Work
