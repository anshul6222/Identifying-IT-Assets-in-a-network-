import React from 'react';

const Title = ({isSignedIn, onRouteChange, hasInfo}) => {
	return (
		<div className="tc">
			{ (isSignedIn && hasInfo)
				?<nav className="dt w-100 tr pa3">
					<a className="fl v-mid mid-gray link dim pointer" onClick = {() => onRouteChange('home')}>Go Back</a> 
					<a className="fr v-mid mid-gray link dim pointer" onClick = {() => onRouteChange('signout')}>Home Page</a>
				</nav>
				: isSignedIn
				? <nav className="dt w-100 tr pa3">
					<a className="fr v-mid mid-gray link dim pointer" onClick = {() => onRouteChange('signout')}>Home Page</a>
				</nav>
				:<nav className="dt w-100 tr pa3">
					<a className="fr v-mid mid-gray link dim pointer" onClick = {() => onRouteChange('signin')}>Home Page</a>
				</nav>
			}
			<h2 className = "f2 f1-l fw2 mb0 lh-title black b tc"><span className="fl"><img alt="Logo" src = {require("../images/ONGC.jpg")} style = {{width:'25%'}}/></span>Identifying IT assets in a Network</h2>
		</div>
	);
}

export default Title;