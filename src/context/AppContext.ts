import { createContext } from 'react';

import { CreateContext } from '../types';

export const AppContext = createContext<CreateContext>({
	products: [],
	loading: false,
	cartItems: [],
	isCartVisible: false,
	setIsCartVisible: () => false,
	setCartItems: () => [], 
	setProducts: () => [],
	setLoading: () => false,
});
