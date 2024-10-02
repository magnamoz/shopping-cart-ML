import { fireEvent, screen } from '@testing-library/react';
import { mockProduct } from 'test/mockProduct';
import { renderWithFullContext } from 'test/testUtils';
import { formatAsBrazilianCurrency } from 'utils/format';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'; 

import { CartItem } from './CartItem';

describe('CartItem', () => {
	const contextValues = {
		cartItems: [mockProduct],
		setCartItems: jest.fn(),
	};

	it.skip('should render product details correctly', () => {
		renderWithFullContext(<CartItem data={mockProduct} />, contextValues);
    
		expect(screen.getByAltText('imagem do produto')).toHaveAttribute('src', 'mock_thumbnail.jpg');
		// expect(screen.getByText('Sample Product')).toBeInTheDocument();
		const productTitleElement = screen.getByText((content, element) => {
			return element?.textContent === 'Sample Product';
		});
		expect(productTitleElement).toBeInTheDocument();
		expect(screen.getByText(formatAsBrazilianCurrency(10.0))).toBeInTheDocument();
	});

	it('should call setCartItems with updated items when remove button is clicked', () => {
		const { container } = renderWithFullContext(<CartItem data={mockProduct} />, contextValues);
		const removeButton = container.querySelector('.button__remove-item');

		fireEvent.click(removeButton!);

		expect(contextValues.setCartItems).toHaveBeenCalledWith([]);
	});
});
