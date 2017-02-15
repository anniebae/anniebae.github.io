import React, { Component } from 'react'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import css from './styles.css'

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<div className="title">
					anniebae.
				</div>

				<div className="content-wrapper">
					<Link to="/about">
						<div className="content-subj tab-about">
							<p className="title">About</p>
						</div>
					</Link>

					<Link to="/work">
						<div className="content-subj tab-work">
							<p className="title">Work</p>
						</div>
					</Link>


					<Link to="/contact">
						<div className="content-subj tab-contact">
							<p className="title">Contact</p>
						</div>
					</Link>
				</div>

			</div>
		)
	}
}

export default Home