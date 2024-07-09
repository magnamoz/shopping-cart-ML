import { Product } from '../types';

export async function fetchProducts(query: string): Promise<Product[]> {
	const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;
	const response = await fetch(url);
    
	if (!response.ok) {
		throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
	}
    
	const data = await response.json();

    
	return data.results;
}
