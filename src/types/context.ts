import { Dispatch, SetStateAction } from 'react';

import { Product } from './product';

export type CreateContext = {
  products: Product[];
  loading: boolean;
  cartItems: Product[];
  isCartVisible: boolean;
  setIsCartVisible: Dispatch<SetStateAction<boolean>>;
  setCartItems: Dispatch<SetStateAction<Product[]>>;
  setProducts: Dispatch<SetStateAction<Product[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
