import { CartButton, SearchBar } from './components';

import './styles.css';

export function Header() {
	return (
		<header className="header">
			<div className="container">
				<SearchBar />
				<CartButton />
			</div>
		</header>
	);
}

