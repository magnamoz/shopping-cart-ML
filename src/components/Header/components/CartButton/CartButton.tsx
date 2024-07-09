import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { AppContext } from '../../../../context';

import './styles.css';

export function CartButton() {
	const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

	return (
		<button
			type="button"
			className="cart__button"
			onClick={ () => setIsCartVisible && setIsCartVisible(!isCartVisible) }
		>
			<AiOutlineShoppingCart />
			{ cartItems && cartItems.length > 0 && <span className="cart_status">{cartItems.length}</span> }
		</button>
	);
}
