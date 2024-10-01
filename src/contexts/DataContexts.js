import React, { useContext, useEffect, useState } from "react";
import data from '../ProductsData.json'

const DataContext = React.createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [searchTerm,setSearcTerm] = useState('')

  useEffect(() => {
    setProducts(data)
  },[])

  const handleSearch = (e) => {
    setSearcTerm(e.target.value)
  }

  const filteredProducts = products.filter(product => {
    return (
     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
  })

  console.log('Filtered Products: ' , filteredProducts)

    const value = {
        products,
        searchTerm,
        setSearcTerm,
        handleSearch,
        filteredProducts
    }

    return (
        <DataContext.Provider value={value}>
           {children}
        </DataContext.Provider>
    )

}


