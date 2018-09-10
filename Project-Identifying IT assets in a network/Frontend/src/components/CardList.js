import React from 'react';
import Card from './Card';
import Key from './Key'

const CardList = ({seed, func, fetchMachines}) => {

	const cardComponent = seed.map((machine, i) =>
		<Card key = {i} name = {i+1} ip = {seed[i].host} status = {seed[i].alive} func = {func} fetchMachines= {fetchMachines}/>
		);
	return (
		<div>
          <Key />
          {cardComponent}
        </div>
	);
}

export default CardList;