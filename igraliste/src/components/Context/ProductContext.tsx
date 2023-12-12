
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  description: string;
  price: string;
  color: string;
  discount: string;
  material: string;
  condition: string;
  odrzuvanje: string;
  tags: string;
  image: string;
  productImages: string[];
  maintenance: string;
  brand: string;
  type: string;
  onSale: boolean;
date:string;
}

export interface ProductContextType {
  products: Product[] | null;
  loading: boolean;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  findProductById: (productId: string) => Product | undefined;
}

export const ProductContext = createContext({} as ProductContextType);

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const findProductById = (productId: string): Product | undefined => {
    return products.find((product) => product.id === productId);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const contextValue: ProductContextType = {
    products,
    loading,
    sortOption,
    setSortOption,
    findProductById,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);


