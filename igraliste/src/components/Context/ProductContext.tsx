
// export const useProductContext = () => useContext(ProductContext);
import { createContext, useContext, useEffect, useState } from "react";

interface Product {
id: string;
name: string;
category: string;
size:string;
sizeDesc:string;
price:string;
color:string;
discount:string;
material:string;
condition:string;
odrzuvanje:string;
tags:string;
images:string;

}


export const ProductContext = createContext<Product[]>([]);

interface ProductProviderProps {
children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
fetch('http://localhost:3001/products')
.then(response => response.json())
.then(data => {
setProducts(data);
setLoading(false);
})
.catch(error => {
setError(error);
setLoading(false);
});
}, []);

if (loading) {
return <p>Loading...</p>;
}

if (error) {
return <p>{error}</p>;
}

return (
<ProductContext.Provider value={products}>
{children}
</ProductContext.Provider>
);
};

export const useProductContext = () => useContext(ProductContext);