import { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
    const [categoryData,setCategoryData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    },[categoryData])

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setCategoryData(data);
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
    const columns = [
        {
            title : "Görsel",
            dataIndex : "image",
            key : "image",
            width : "25%",
            render : (img,record) => (
                <img src={`${record.image}`} style={{width:"50%"}} alt='Kategori görseli' />
            )
        },
        {
            title : "Kategori Adı",
            dataIndex : "name",
            key : "name",
            width : "50%",
            render : (text) => (<strong>{text}</strong>)
        },
        {
            title : "İşlemler",
            key : "actions",
            render : (_,record) => (
                <Space size="middle">
                    <Button color='cyan' variant="solid" onClick={() => {navigate(`/admin/categories/update/${record._id}`)}}>Güncelle</Button>
                    <Button color='danger' variant="solid" onClick={() => deleteCategory(record._id)}>Sil</Button>
                </Space>
            )
        }
    ]
  return (
    <div>
        <h2>Kategoriler</h2>
        <Table columns={columns} dataSource={categoryData} rowKey={(record) => record._id}/>
    </div>
  )
}

export default CategoryList