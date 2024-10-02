import { mockProduct } from 'test';

import { Product } from '../types';

import { calcPriceCart, formatAsBrazilianCurrency } from './format';

describe('formatAsBrazilianCurrency', () => {
	const normalizeSpaces = (str: string) => str.replace(/\s/g, ' ');

	it('should format numbers as Brazilian currency', () => {
		expect(normalizeSpaces(formatAsBrazilianCurrency(1234.56))).toBe('R$ 1.234,56');
		expect(normalizeSpaces(formatAsBrazilianCurrency(1234))).toBe('R$ 1.234,00');
		expect(normalizeSpaces(formatAsBrazilianCurrency(0))).toBe('R$ 0,00');
		expect(normalizeSpaces(formatAsBrazilianCurrency(1234.567))).toBe('R$ 1.234,567');
	});
});

describe('calcPriceCart', () => {

	it('should calculate the total price of items in the cart', () => {
		const items = [
			{ ...mockProduct, price: 10.0 },
			{ ...mockProduct, price: 20.0 },
			{ ...mockProduct, price: 30.0 }
		];

		expect(calcPriceCart(items)).toBe(60.0);
	});

	it('should return 0 if the cart is empty', () => {
		const items: Product[] = [];
		expect(calcPriceCart(items)).toBe(0);
	});

	it('should handle cart with a single item', () => {
		const items = [
			{ ...mockProduct, price: 15.75 }
		];
		expect(calcPriceCart(items)).toBe(15.75);
	});

	it('should handle cart with items priced as zero', () => {
		const items = [
			{ ...mockProduct, price: 0 },
			{ ...mockProduct, price: 0 }
		];
		expect(calcPriceCart(items)).toBe(0);
	});
});
