import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<>
			<div className='header-container'>
				<ul className='header wrapper'>
					<li className='logo'>Vitholum</li>
					<li className='search-bar'>
						<span className='material-symbols-outlined'>search</span>
					</li>
					<li className='profile-icon'>
						<span className='material-symbols-outlined'>person</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
