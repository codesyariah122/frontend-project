import React, {Fragment} from 'react'

const Sky = () => {
	return (
		<Fragment>
		<svg width="250px" viewBox="0 0 113.39 99.21">
		<linearGradient id="sky_sunset" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(-25)">
		<stop offset="0%" stopColor="#f7ffa9" stopOpacity="1"></stop>
		<stop offset="40%" stopColor="#ffcc33" stopOpacity="1"></stop>
		<stop offset="100%" stopColor="#ffbe1d" stopOpacity="1"></stop>
		</linearGradient>
		<linearGradient id="sky_dusk" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45)">
		<stop offset="0%" stopColor="#ffd4fe" stopOpacity="1"></stop>
		<stop offset="30%" stopColor="#ffd4fe" stopOpacity="1"></stop>
		<stop offset="100%" stopColor="#ffd26a" stopOpacity="1"></stop>
		</linearGradient>
		<polygon fill="#B3EFFF" id="sky" points="111.971,97.368 111.971,1.842 1.419,1.842 1.419,9.042 1.419,97.368"></polygon>
		</svg>
		</Fragment>
		)
}

export default Sky