import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

    const createProduct = async(values) => {
        try {
            const response = await fetch("http://localhost:5000/api/products",{
                method : "POST",
                headers : {
                    "content-type":"application/json"
                },
                body : JSON.stringify(values)
            });
            if(response.ok){
                navigate("/admin/products")
            }else{
                console.log("Ürün ekleme işlemi başarısız...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = async(values) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${values._id}`,{
                method : "PUT",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(values)
            });
            if(response.ok){
                navigate("/admin/products");
            }else{
                console.log("Ürün güncellenirken hata oluştu...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    },[navigate])

    const values = {
        products,
        getProducts,
        deleteProduct,
        getByIdProduct,
        createProduct,
        updateProduct
    }

  return (
    <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext}