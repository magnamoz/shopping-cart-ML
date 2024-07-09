import { Product } from '../types';

export function formatAsBrazilianCurrency(value: number)  {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(value);
}

export function calcPriceCart  (itemsOnCart: Product[])  {
	return itemsOnCart.reduce((acc, item) => item.price + acc, 0);
}
