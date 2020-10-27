import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);
	const [values, handleInputChanges] = useForm({
		search: q,
	});

	const { search } = values;

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${search}`);
		console.log(heroesFiltered);
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='find your hero'
							className='form-control'
							name='search'
							value={search}
							onChange={handleInputChanges}
							autoComplete='off'
						/>
						<button
							type='submit'
							className='btn btn-primary-outline'
						>
							Buscar
						</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
