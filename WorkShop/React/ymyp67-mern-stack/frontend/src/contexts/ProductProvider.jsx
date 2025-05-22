import React, { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setProducts(data);
            }else{
                console.log("Ürünler getirilemedi...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async(productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`,{
                method : "DELETE"
            });
            if(response.ok){
                getProducts();
            }else{
                console.log("Ürün silinemedi...");
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getByIdProduct = async(id,frm) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`);
            if(response.ok){
                const data = await response.json();
                if(data){
                    frm.setFieldsValue({
                        name : data.name,
                        images : data.images,
                        description : data.description,
                        colors : data.colors,
                        stock : data.stock,
                        category : data.category,
                        _id : id
                    });
                }else{
                    console.log("Ürün getirilemedi...");
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    },[])

    const values = {
        products,
        getProducts,
        deleteProduct,
        getByIdProduct
    }

  return (
    <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext}