import React from 'react'
import './Header.css'

import menu from '../assets/Menu.svg'
import youTube from '../assets/Black.svg'
import search from '../assets/search_logo.svg'
import video from '../assets/video_logo.svg'
import box from '../assets/box_logo.svg'
import searchLogo from '../assets/search.svg'
import avatar from '../assets/avatar_logo.svg'

const Header = () => {
	return (
		<div className='header_box'>
			<div>
				<a href="/">
					<img src={menu} alt="hamburger img" width={20} height={17} />
				</a>

				<a className='ms-4' href="/">
					<img src={youTube} alt="you tube logo" width={116} height={25} />
				</a>
			</div>

			<form>
				<label className='search_label'>
					<input className='search_input' type="text" autoComplete='off' placeholder='Search' required />
					<img src={search} alt="search logo" width={18} height={18} />
				</label>
			</form>

			<ul className='p-3 header_list  d-flex'>
				<li className='me-4 pt-1'>
					<a href="/">
						<img src={video} alt="video"  width={27} height={20}/>
					</a>
				</li>

				<li className='me-4 pt-1'>
					<a href="/">
						<img src={box} alt="box"  width={21} height={21}/>
					</a>
				</li>

				<li className='me-4 pt-1'>
					<a href="/">
						<img src={searchLogo} alt="..."  width={22} height={26}/>
					</a>
				</li>

				<li>
					<a href="/">
						<img src={avatar} alt="avatar"  width={40} height={40}/>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Header