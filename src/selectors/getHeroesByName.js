import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
	if (name === '') {
		return [];
	}
	return heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(name.toLowerCase())
	);
};
