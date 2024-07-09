import  { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';

import { AppContext } from '../../../../context';
import { Product } from '../../../../types';
import { formatAsBrazilianCurrency } from '../../../../utils';

import './styles.css';

interface CartItemProps {
    data: Product;
}

export function CartItem({ data } : CartItemProps ) {
	const { cartItems = [], setCartItems } = useContext(AppContext);
	const { id, thumbnail, title, price } = data;

	const handleRemoveItem = () => {
		const updatedItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedItems);
	};

	return (
		<section className="cart-item">
			<img
				src={thumbnail}
				alt="imagem do produto"
				className="cart-item-image"
			/>

			<div className="cart-item-content">
				<h3 className="cart-item-title">{title}</h3>
				<h3 className="cart-item-price">{formatAsBrazilianCurrency(price)}</h3>

				<button
					type="button"
					className="button__remove-item"
					onClick={ handleRemoveItem }
				>
					<BsCartDashFill />
				</button>
			</div>
		</section>
	);
}

