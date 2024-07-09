import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

import { AppContext } from '../../../../context';
import { Product } from '../../../../types';
import { formatAsBrazilianCurrency } from '../../../../utils';

import './styles.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard ({ product }: ProductCardProps) {
	const {  thumbnail,  price } = product;
	const { cartItems, setCartItems } = useContext(AppContext);

	const handleAddCart = () => setCartItems && setCartItems([ ...cartItems, product ]);

	return (
		<section className="product-card">
      
			<img
				src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
				alt="product"
				className="card__image"
			/>

			<div className="card__infos">
				<h2 className="card__price">{formatAsBrazilianCurrency(price)}</h2>
				<h2 className="card__title">{product.title}</h2>
			</div>

			<button
				type="button"
				className="button__add-cart"
				onClick={ handleAddCart }
			>
				<BsFillCartPlusFill />
			</button>
		</section>
	);
}
