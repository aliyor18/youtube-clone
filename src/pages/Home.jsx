import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'
import gunes from '../assets/gunes.svg'
import cover from '../assets/cover_img.png'
import hotel from '../assets/hotel.png'
import asteroid from '../assets/asteroid.png'
import telescop from '../assets/teleskop.png'
import tele from '../assets/tele.png'
import moon from '../assets/moon.png'
import girl from '../assets/girl.png'
import food from '../assets/food.svg'
import medical from '../assets/medical.png'
import camen from '../assets/camen.png'
import ice from '../assets/ice_cream.png'
import chery from '../assets/chery.png'
import foods from '../assets/spageti.png'
import limon from '../assets/limon.png'
import baton from '../assets/baton.png'
import watermellon from '../assets/watermellon.png'

const Home = () => {
	return (
		<div>
			<div>
				<a href="/">
					<img src={gunes} alt="avatar" width={60} height={60} />
					<span>Dollie Blair</span>
				</a>

				<ul className='home_list list-unstyled mt-3 row'>
					<li className='col-2'>
						<Link to="/player">
							<img className='card-img' src={cover} alt="img" />

							<p className='text-white home_desc m-0'>A Brief History</p>

							<p className='d-inline home_span'>80k views  ·  3 days ago</p>

							<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={hotel} alt="img" />

						<p className='text-white home_desc m-0'>Selecting The Right Hotel</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={asteroid} alt="img" />

						<p className='text-white home_desc m-0'>Asteroids</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={telescop} alt="img" />

						<p className='text-white home_desc m-0'>Telescopes 101</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={medical} alt="img" />

						<p className='text-white home_desc m-0'>Telescopes 101</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img rounded-3' src={camen} alt="img" height={108} />

						<p className='text-white home_desc m-0'>Telescopes 101</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<p className='home_heading text-white'>
					Recommended
				</p>

				<ul className='list-unstyled row'>
					<li className='col-4'>
					<Link to="/player">
						<img className='card-img' src={tele} alt="img" />

						<p className='text-white m-0'>
							Dude You Re Getting A Telescope
						</p>

						<div className='d-flex justify-content-between'>
							<p className='d-inline home_span'>80k views  ·  3 days ago</p>

							<span className='home_span'>Dollie Blair</span>
							
						</div>
						</Link>
					</li>

					<li className='col-4'>
					<Link to="/player">
						<img className='card-img' src={moon} alt="img" />

						<p className='text-white m-0'>
							Moon Gazing
						</p>

						<div className='d-flex justify-content-between'>
							<p className='d-inline home_span'>80k views  ·  3 days ago</p>

							<span className='home_span'>Dollie Blair</span>
						</div>
						</Link>
					</li>

					<li className='col-4'>
					<Link to="/player">
						<img className='card-img rounded-3' src={girl} alt="img" height={179} />

						<p className='text-white m-0'>
							Moon Gazing
						</p>

						<div className='d-flex justify-content-between'>
							<p className='d-inline home_span'>80k views  ·  3 days ago</p>

							<span className='home_span'>Dollie Blair</span>
						</div>
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<div>
					<a className='d-flex align-items-center text-decoration-none' href="/">
						<img src={food} alt="img" width={50} height={50} />

						<p className='home__descs'>Food & Drink</p>

						<span className='home__spans'>Recommended channel for you</span>
					</a>
				</div>

				<ul className='home_list list-unstyled mt-3 row'>
					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={ice} alt="img" />

						<p className='text-white home_desc m-0'>Astronomy Or Astrology</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>


					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={chery} alt="img" />

						<p className='text-white home_desc m-0'>Advertising Outdoors</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={foods} alt="img" />

						<p className='text-white home_desc m-0'>Radio Astronomy</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={limon} alt="img" />

						<p className='text-white home_desc m-0'>A Good Autoresponder</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img' src={baton} alt="img" />

						<p className='text-white home_desc m-0'>Baby Monitor Technology</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>

					<li className='col-2'>
					<Link to="/player">
						<img className='card-img rounded-3' src={watermellon} alt="img" height={108} />

						<p className='text-white home_desc m-0'>Asteroids</p>

						<p className='d-inline home_span'>80k views  ·  3 days ago</p>

						<span className='home_span'>Dollie Blair</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Home