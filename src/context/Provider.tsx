import  { ReactNode, useState } from 'react';

import { CreateContext, Product } from '../types';

import {AppContext} from './AppContext';

interface ProviderProps {
	children:ReactNode;
}

export function Provider({ children }: ProviderProps) {

	const [products, setProducts] = useState<Product[]>([]);
	const [cartItems, setCartItems] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

	const value: CreateContext = {
		products,
		setProducts,
		loading,
		setLoading,
		cartItems,
		setCartItems,
		isCartVisible,
		setIsCartVisible,
	};

	return (
		<AppContext.Provider value={ value }>
			{children}
		</AppContext.Provider>
	);
}
