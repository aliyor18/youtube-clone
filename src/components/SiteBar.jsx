import React, { useEffect, useState } from 'react'
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
import setting from '../assets/setting.svg'
import useFetching from '../hooks/useFetching'


const SiteBar = () => {
	const {request} = useFetching()
	const [users,setUsers] = useState([])

		useEffect(() => {
			const data =  async () => {
				const data = await request()	
				setUsers(data.data)
			}
			data()
		},[])

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

				{
					users.map(el => (
						<li key={el.id} className='mb-3'>
							<Link className='links' to={`/channel/${el.id}`}>
								<img className='me-2 rounded-circle' src={el.avatar} alt="avatar" width={40} height={40} />
								{el.first_name}
							</Link>
						</li>
					))
				}
			</ul>

			<ul className='list-unstyled pt-5'>
				<li>
				<Link className='links' to="/channel:id">
					<img className='me-2' src={setting} alt="setting" width={19} height={20} />
					Setting
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default SiteBar