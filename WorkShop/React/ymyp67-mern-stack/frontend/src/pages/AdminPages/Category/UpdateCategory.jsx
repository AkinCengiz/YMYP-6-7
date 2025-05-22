import React, { useContext, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../../contexts/CategoryProvider';

const UpdateCategory = () => {
  
  const {updateCategory,getByCategory} = useContext(CategoryContext)
  const params = useParams();
  const categoryId = params.id;
  const [form] = Form.useForm();


  
  useEffect(() => {
    getByCategory(categoryId,form);
  },[categoryId])
  
  return (
    <div>
      <Form layout='vertical' form={form} initialValues={{layout : "vertical"}} onFinish={updateCategory} >
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