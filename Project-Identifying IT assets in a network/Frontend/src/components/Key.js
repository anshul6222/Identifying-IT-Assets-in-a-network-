import React from 'react';
import './Key.css';


const Key = () => {
	return (
	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-100-m w-50-l mw6 center">
		<h4>Legend</h4>
		<ul>
    	<li>
	        <div className="input-color">
	            <p><span className="bg-light-green color-box"></span> Machine is ONLINE.</p>   
	        </div>
    	</li>
    	<li>
	        <div className="input-color">
	            <p><span className="bg-light-red color-box"></span> Machine is OFFLINE.</p>
	        </div>
    	</li>
		</ul>
  	</article>
  	);
}

export default Key;