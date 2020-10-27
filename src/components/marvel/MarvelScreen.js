import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
	return (
		<div>
			<h1>Marvel Screen</h1>

			<HeroList publisher={'Marvel Comics'} />
		</div>
	);
};
