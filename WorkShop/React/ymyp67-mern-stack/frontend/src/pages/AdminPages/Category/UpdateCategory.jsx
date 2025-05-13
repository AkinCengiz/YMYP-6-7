import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
  const navigate = useNavigate();
  const params = useParams();
  const categoryId = params.id;
  const [form] = Form.useForm();
  
  const getByCategory = async() => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`);
      if(response.ok){
        const data = await response.json();
        if(data){
          form.setFieldsValue({
            name : data.name,
            image : data.image,
            _id : categoryId
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
    getByCategory();
  },[])
  const handleUpdateCategory = async(values) => {
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
  return (
    <div>
      <Form layout='vertical' form={form} initialValues={{layout : "vertical"}} onFinish={handleUpdateCategory} >
        <Form.Item label="Kategori ID" name="_id" style={{display:"none"}}>
          <Input />
        </Form.Item>
        <Form.Item label="Kategori Adı" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Görsel Yolu" name="image">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button color='cyan' variant='solid' htmlType='submit'>Kategori Güncelle</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateCategory