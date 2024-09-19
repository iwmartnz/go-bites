import { CartItem, Product } from '@/types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { randomUUID } from 'expo-crypto';

type CartContextProps = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem['size']) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem['size']) => {
    const existingItem = items.find(
      (item) => item.product === product && item.size === size
    );

    if (existingItem) {
      return updateQuantity(existingItem.id, 1);
    }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems((prevData) => [...prevData, newCartItem]);
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter((item) => item.quantity > 0);
    setItems(updatedItems);
  };

  const total = items.reduce(
    (accumulator, item) => (accumulator += item.product.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart mus be used within a CartContextProvider');
  } else {
    return context;
  }
};
