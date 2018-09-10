import React from 'react';

const Info = ({value}) => 
{
	var head = value.split("=");
	return (
		<div>
			<h3>{head[0]}</h3>
        	<p>{head[1]}</p>
        </div>
	);
}

export default Info;