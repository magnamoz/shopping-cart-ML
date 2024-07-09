import { FormEvent, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { fetchProducts } from '../../../../api/api';
import { AppContext } from '../../../../context';

import './styles.css';


export function SearchBar() {
	const [searchValue, setSearchValue] = useState('');
	const { setProducts, setLoading } = useContext(AppContext);
	
	const handleSearch = async (event: FormEvent) => {
		event.preventDefault();
		setLoading && setLoading(true);

		const products = await fetchProducts(searchValue);

		setProducts && setProducts(products);
		setLoading && setLoading(false);
		setSearchValue('');
	};

	return (
		<form className="search-bar"  onSubmit={handleSearch}>
			<input
				type="search"
				value={searchValue}
				placeholder="Buscar produtos"
				className="search__input"
				onChange={ ({ target }) => setSearchValue(target.value) }
				required
			/>
			<button type="submit" className="search__button">
				<BsSearch />
			</button>
		</form>
	);
}
