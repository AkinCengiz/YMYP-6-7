import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate();


    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                //console.log(data)
                setCategories(data);
            }else{
                console.log("Kategori getirilirken hata oluştu...");
            }

        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }
    const deleteCategory = async(categoryId) => {
        try {
            const response = await fetch("http://localhost:5000/api/categories",{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({_id:categoryId})
            });
            if(response.ok){
                getCategories();
            }else{
                console.log("Kategori silinirken hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası : ",error);
        }
    }

    const createCategory = async(values) => {
    try {
      const response = await fetch("http://localhost:5000/api/categories",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(values)
      });
      if(response.ok){
        navigate("/admin/categories");
      }else{
        console.log("Kategori eklerken problem oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası : ",error)
    }
    }

    const updateCategory = async(values) => {
    try {
      const response = await fetch("http://localhost:5000/api/categories/",{
        method : "PUT",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(values)
      });
      if(response.ok){
        navigate("/admin/categories")
      }else{
        console.log("Güncelleme işlemi başarısız oldu...");
      }
    } catch (error) {
      console.log("Sunucu hatası : ", error);
    }
  }
    const getByCategory = async(id,frm) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${id}`);
      if(response.ok){
        const data = await response.json();
        if(data){
          frm.setFieldsValue({
            name : data.name,
            image : data.image,
            _id : id
          });
        }else{
          console.log("Kategori getirilemedi...");
        }
      }
    } catch (error) {
      console.log("Sunucu hatası : ", error);
    }
  }

    useEffect(() => {
        getCategories();
    })


    const values = {
        categories,
        setCategories,
        getCategories,
        deleteCategory,
        createCategory,
        updateCategory,
        getByCategory
    }
  return (
    <CategoryContext.Provider value={values}>
        {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }