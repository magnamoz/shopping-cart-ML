import  { useContext, useEffect } from 'react';

import { fetchProducts } from '../../api/api';
import { AppContext } from '../../context';
import { Loading } from '../Loading';

import { ProductCard } from './components';

import './styles.css';

export function  Products() {
	const { products, setProducts, loading, setLoading } = useContext(AppContext);
  
	useEffect(() => {
		fetchProducts('headphone').then((response) => {
			setProducts && setProducts(response);
			setLoading && setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<section className="products container">
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</section>
			)}
		</>
    
	);
}
