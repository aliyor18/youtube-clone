import React from 'react'
import './SiteBar.css'
import {Link} from "react-router-dom"

import home from '../assets/home_logo.svg'
import trend from '../assets/trending_logo.svg'
import subscript from '../assets/subscript-logo.svg'
import library from '../assets/library_logo.svg'
import history from '../assets/history_logo.svg'
import watch from '../assets/watch_logo.svg'
import star from '../assets/star_logo.svg'
import liked from '../assets/liked_logo.svg'
import music from '../assets/music_logo.svg'
import game from '../assets/games_logo.svg'
import more from '../assets/more_logo.svg'
import gunes from '../assets/gunes.svg'
import nora from '../assets/nora.svg'
import bele from '../assets/bele.svg'
import eunice from '../assets/eunice.svg'
import emma from '../assets/emma.svg'
import leah from '../assets/leah.svg'
import setting from '../assets/setting.svg'


const SiteBar = () => {
	return (
		<div className='sitebar_box'>
			<ul className='list-unstyled mb-5'>
				<li className='mb-3'>
					<Link to="/">
						<img className='me-2' src={home} alt="home" width={20} height={19} />
						Home
					</Link>
				</li>

				<li className='mb-3'>
					<a href="/">
						<img className='me-2' src={trend} alt="Trending" width={20} height={19} />
						Trending
					</a>
				</li>

				<li className='mb-3'>
					<a href="/">
						<img className='me-2' src={subscript} alt="Subscriptions" width={20} height={19} />
						Subscriptions
					</a>
				</li>
			</ul>

			<ul className='list-unstyled'>
				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={library} alt="Library" width={20} height={16} />
						<p>
							Library
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={history} alt="History" width={20} height={16} />
						<p>
							History
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={watch} alt="Watch later" width={20} height={16} />
						<p>
							Watch later
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={star} alt="Favourites" width={20} height={16} />
						<p>
							Favourites
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={liked} alt="Liked videos" width={20} height={16} />
						<p>
							Liked videos
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={music} alt="Music" width={20} height={16} />
						<p>
							Music
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={game} alt="Games" width={20} height={16} />
						<p>
							Games
						</p>
					</a>
				</li>

				<li className='mb-2'>
					<a className='d-flex links' href="/">
						<img className='me-2' src={more} alt="Show more" width={20} height={16} />
						<p>
							Show more
						</p>
					</a>
				</li>
			</ul>

			<ul className='list-unstyled mb-5'>
				<li className='site_title text-white'>
					Subscriptions
				</li>

				<li className='mb-3'>
					<Link className='links' to="/channel">
						<img className='me-2' src={gunes} alt="avatar" width={26} height={26} />
						Gussie Singleton
					</Link>
				</li>

				<li className='mb-3'>
				<Link className='links' to="/channel">
						<img className='me-2' src={nora} alt="avatar" width={26} height={26} />
						Nora Francis
					</Link>
				</li>

				<li className='mb-3'>
					<Link className='links' to="/channel">
						<img className='me-2' src={bele} alt="avatar" width={26} height={26} />
						Belle Briggs
						</Link>
				</li>

				<li className='mb-3'>
				<Link className='links' to="/channel">
						<img className='me-2' src={eunice} alt="avatar" width={26} height={26} />
						Eunice Cortez
						</Link>
				</li>

				<li className='mb-3'>
				<Link className='links' to="/channel">
						<img className='me-2' src={emma} alt="avatar" width={26} height={26} />
						Emma Hanson
						</Link>
				</li>

				<li className='mb-5'>
				<Link className='links' to="/channel">
						<img className='me-2' src={leah} alt="avatar" width={26} height={26} />
						Leah Berry
						</Link>
				</li>
			</ul>

			<ul className='list-unstyled pt-5'>
				<li>
				<Link className='links' to="/channel">
						<img className='me-2' src={setting} alt="setting" width={19} height={20} />
						Setting
						</Link>
				</li>
			</ul>
		</div>
	)
}

export default SiteBar