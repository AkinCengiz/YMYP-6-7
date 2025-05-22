import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd'
import { CategoryContext } from '../../../contexts/CategoryProvider';


const CreateCategory = () => {

  const {createCategory} = useContext(CategoryContext);
  const [form] = Form.useForm();
  

  
  return (
    <Form layout="vertical" form={form} initialValues={{layout : "vertical"}} onFinish={createCategory}>
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