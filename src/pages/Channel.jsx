import './Channel.css'
import React from 'react'
import { Link } from "react-router-dom"

import channelBg from '../assets/channel-bg.png'
import margaret from '../assets/margaret.svg'
import searchs from '../assets/search_logo.svg'
import audio from '../assets/audio.png'
import flora from '../assets/flora.svg'
import violet from '../assets/violet.svg'
import philip from '../assets/philip.svg'
import astronomy from '../assets/astronomy.png'
import outdoor from '../assets/outdoors.png'
import radio from '../assets/radio.png'
import watermelon from '../assets/watermelon.png'
import monitor from '../assets/monitor.png'
import asteroids from '../assets/asteroids.png'

const Channel = () => {
	return (
		<div className='channel-box'>
			<div className='col-12 mt-2 mb-4'>
				<img className='card-img' src={channelBg} alt="bg" />
			</div>

			<div className='col-12 d-flex align-items-center justify-content-between'>

				<a className='d-flex text-decoration-none' href="/">
					<img className='me-2' src={margaret} alt="avatar" />

					<div className='d-flex flex-column'>
						<p className='channel_name'>Margaret Phelps</p>
						<p className='channel_num'>245K subscribed</p>
					</div>
				</a>

				<button className='channel-bg'>
					Subscribe 2.3m
				</button>

			</div>


			<div className='d-flex justify-content-between pt-3'>
				<ul className='list-unstyled d-flex'>
					<li className='me-5'>
						<a className='text-decoration-none channel_desc' href="/">
							Home
						</a>
					</li>

					<li className='me-5	'>
						<a className='text-decoration-none channel_desc' href="/">
							Videos
						</a>
					</li>

					<li className='me-5	'>
						<a className='text-decoration-none channel_desc' href="/">
							Playlists
						</a>
					</li>

					<li className='me-5	'>
						<a className='text-decoration-none channel_desc' href="/">
							Channels
						</a>
					</li>

					<li className='me-5	'>
						<a className='text-decoration-none channel_desc' href="/">
							Discussion
						</a>
					</li>

					<li className='me-5'>
						<a className='text-decoration-none channel_desc' href="/">
							About
						</a>
					</li>

					<li>
						<a href="/">
							<img src={searchs} alt="saerch" width={19} height={19} />
						</a>
					</li>
				</ul>

				<p className='channel_num'>Recommended channel</p>
			</div>

			<div className='d-flex mt-4'>
				<div>
					<Link className='text-decoration-none d-flex' to="/player">
						<img src={audio} alt="img" width={400} height={200} />

						<div className='ms-3 channel__box'>
							<p className='channel_heading'>Choosing The Best Audio Player Software For Your Computer</p>

							<p className='channel__text'>
								Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads.
							</p>

							<span className='channel__span'>
								11k views  ·  6 months ago
							</span>
						</div>
					</Link>
				</div>

				<ul className='list-unstyled text-right ps-5'>
					<li className='mb-3'>
						<a className='text-decoration-none channel__links' href="/">
							<img className='me-3' src={flora} alt="avatar" />
							Flora Benson
						</a>
					</li>

					<li className='mb-3'>
						<a className='text-decoration-none channel__links' href="/">
							<img className='me-3' src={violet} alt="avatar" />
							Flora Benson
						</a>
					</li>

					<li>
						<a className='text-decoration-none channel__links' href="/">
							<img className='me-3' src={philip} alt="avatar" />
							Flora Benson
						</a>
					</li>
				</ul>
			</div>

			<div className='mt-5'>
				<p className='chanel__title'>
				Margaret Phelps videos
				</p>

				<ul className='home_list list-unstyled mt-3 row'>
					<li className='col-2'>
						<Link to="/player">
							<img className='card-img' src={astronomy} alt="img" />

							<p className='text-white channell_desc'>Astronomy Or Astrology</p>

							<p className='d-inline channell_span'>40k views  ·  4 months ago</p>

							<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>

					<li className='col-2'>
						<Link to="/player">
							<img className='card-img' src={outdoor} alt="img" />

							<p className='text-white channell_desc'>Advertising Outdoors</p>

							<p className='d-inline channell_span'>80k views  ·  3 days ago</p>

						<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={radio} alt="img" />

						<p className='text-white channell_desc'>Radio Astronomy</p>

						<p className='d-inline channell_span'>80k views  ·  3 days ago</p>

						<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>

					<li className='col-2'>
						<Link to="/player">
							<img className='card-img' src={watermelon} alt="img" />

							<p className='text-white channell_desc'>A Good Autoresponder</p>

							<p className='d-inline channell_span'>80k views  ·  3 days ago</p>

							<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>

					<li className='col-2'>
						<Link to="/player">
							<img className='card-img' src={monitor} alt="img" />

							<p className='text-white channell_desc'>Baby Monitor Technology</p>

							<p className='d-inline channell_span'>80k views  ·  3 days ago</p>

							<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>

					<li className='col-2'>
						<Link to="/player">
							<img className='card-img rounded-3' src={asteroids} alt="img" height={108} />

							<p className='text-white channell_desc'>Asteroids</p>

							<p className='d-inline channell_span'>80k views  ·  3 days ago</p>

							<span className='channell_span'>Food & Drink</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Channel
