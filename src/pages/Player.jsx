import './Player.css'
import {Link} from "react-router-dom"

import React from 'react'
import autoplay from '../assets/autoplay.svg'
import autoplayer from '../assets/video-player.png'
import food from '../assets/food.svg'
import ice from '../assets/ice_cream.png'
import chery from '../assets/chery.png'
import monitor from '../assets/monitor.png'
import limon from '../assets/limon.png'

const Player = () => {
	return (
		<div className='player__container row pt-3'>
			<div className='col-9 player__top'>
				<a href="/">
					<img className='card-img' src={autoplayer} alt="img" />
				</a>

				<div className='col-12 d-flex justify-content-between pt-5'>
					<Link className='d-flex align-items-start text-decoration-none' to="/player">
						<img className='me-2 mt-2' src={food} alt="avatar" />

						<div className='d-flex flex-column player__bottom'>
							<p className='player_name m-0'>
								Food & Drink
							</p>

							<p className='player_num'>
								Published on 14 Jun 2019
							</p>

							<p className='player__desc'>
								A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
							</p>

							<a className='text-decoration-none player__link' href='/'>
								Show more
							</a>
						</div>
					</Link>

					<button className='player-btn'>
						Subscribe 2.3m
					</button>
				</div>
			</div>

			<ul className='col-3 list-unstyled'>
				<li className='d-flex justify-content-between'>
					<p className='player__title'>
						Next
					</p>

					<a className='player__auto'>
						Autoplay
						<img src={autoplay} alt="img" width={40} height={23} />
					</a>
				</li>

				<li className='mt-3'>
					<a className='text-decoration-none' href="/">
						<img src={ice} alt="img" />
						
						<p className='player__heading'>Baby Monitor Technology</p>

						<div className='d-flex justify-content-between'>
							<span className='player__spans'>123k views</span>

							<span className='player__spans'>Dollie Blair</span>
						</div>
					</a>
				</li>

				<li className='mt-3'>
					<a className='text-decoration-none' href="/">
						<img src={chery} alt="img" />
						
						<p className='player__heading'>A Good Autoresponder</p>

						<div className='d-flex justify-content-between'>
							<span className='player__spans'>123k views</span>

							<span className='player__spans'>Dollie Blair</span>
						</div>
					</a>
				</li>

				<li className='mt-3'>
					<a className='text-decoration-none' href="/">
						<img src={monitor} alt="img" />
						
						<p className='player__heading'>Selecting The Right Hotel</p>

						<div className='d-flex justify-content-between'>
							<span className='player__spans'>123k views</span>

							<span className='player__spans'>Dollie Blair</span>
						</div>
					</a>
				</li>

				<li className='mt-3'>
					<a className='text-decoration-none' href="/">
						<img src={limon} alt="img" />
						
						<p className='player__heading'>Baby Monitor Technology</p>

						<div className='d-flex justify-content-between'>
							<span className='player__spans'>123k views</span>

							<span className='player__spans'>Dollie Blair</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Player