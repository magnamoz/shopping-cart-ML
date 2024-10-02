import { act, ReactElement} from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppContext } from '../context/AppContext';
import { CreateContext, Product} from '../types';

import { mockProduct } from './mockProduct';

interface RenderWithFullContextOptions {
  cartItems?: Product[];
  setCartItems?: jest.Mock;
  [key: string]: any;
}

export const renderWithFullContext = (
	component: ReactElement,
	contextValues: RenderWithFullContextOptions = {}
): RenderResult => {
	const value: CreateContext = {
		...AppContext,
		cartItems: contextValues.cartItems || [mockProduct],
		setCartItems: contextValues.setCartItems || jest.fn(),
		...contextValues,
		products: contextValues.products || [],
		loading: contextValues.loading || false,
		isCartVisible: contextValues.isCartVisible || false,
		setIsCartVisible: contextValues.setIsCartVisible || jest.fn(),
		setProducts: contextValues.setProducts || jest.fn(),
		setLoading: contextValues.setLoading || jest.fn()
	};
	
	let renderResult: RenderResult;

	act(() => {
		renderResult = render(
			<AppContext.Provider value={value}>
				{component}
			</AppContext.Provider>
		);
	});

	return renderResult!;
};
