import React from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleCreateCategory = async(values) => {
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

  return (
    <Form layout="vertical" form={form} initialValues={{layout : "vertical"}} onFinish={handleCreateCategory}>
      <Form.Item label="Kategori Adı" name="name">
        <Input placeholder='Kategori adı...'/>
      </Form.Item>
      <Form.Item label="Görsel Yolu" name="image">
        <Input placeholder='Görsel yolu...' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>Kategori Oluştur</Button>
      </Form.Item>
    </Form>
  )
}

export default CreateCategory