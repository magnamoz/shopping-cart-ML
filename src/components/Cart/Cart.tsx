import  { useContext } from 'react';

import { AppContext } from '../../context';
import { calcPriceCart, formatAsBrazilianCurrency } from '../../utils/format';

import { CartItem } from './components/CartItem/CartItem';

import './styles.css';

export function Cart() {
	const { cartItems, isCartVisible } = useContext(AppContext);

	const totalPrice = calcPriceCart(cartItems);

	return (
		<section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
			<div className="cart-items">
				{ cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
			</div>

			<div className="cart-resume">{formatAsBrazilianCurrency(totalPrice)}</div>
		</section>
	);
}
