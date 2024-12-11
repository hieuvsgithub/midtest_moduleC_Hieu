import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/productService";

export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const category = await getAll("/categories");

        const data = await getAll("/products");
        setCategories(category);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const value = {
    categories,
    products,
    setProducts,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default DataProvider;
