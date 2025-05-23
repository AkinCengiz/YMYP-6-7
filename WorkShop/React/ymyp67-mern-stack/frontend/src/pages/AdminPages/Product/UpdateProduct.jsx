import React, { useContext, useEffect } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { CategoryContext } from '../../../contexts/CategoryProvider';
import { ProductContext } from '../../../contexts/ProductProvider';
import { useParams } from 'react-router-dom';

const { TextArea } = Input;

const UpdateProduct = () => {

  const {categories} = useContext(CategoryContext)
  const {updateProduct, getByIdProduct} = useContext(ProductContext);
  const params = useParams();
  const productId = params.id;
  const [form] = Form.useForm();

  useEffect(() => {
    getByIdProduct(productId,form);
  },[productId])

  const colors = ["Black","White","Grey","Red","Green","Brown","Blue","Orange","Yellow"];
  return (
    <div>
        <h2 style={{marginBottom : "10px"}}>Ürün Güncelle</h2>
        <Form form={form} layout='vertical' onFinish={updateProduct} initialValues={{colors:["Black","White","Red"]}} >
            <Form.Item label="Ürün ID" name="_id" style={{display:"none"}}>
              <Input />
            </Form.Item>
            <Form.Item label="Ürün Adı" name="name" rules={[{required : true, message : "Lütfen ürün adı giriniz..."}]}>
                <Input placeholder='Ürün adı giriniz...' />
            </Form.Item>
            <Form.Item label="Ürün Görselleri" name="images"  rules={[{required : true, message : "Lütfen ürüne ait görsel giriniz..."}]}>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Ürün Fiyatı" name="price"  rules={[{required : true, message : "Lütfen ürüne fiyat bilgisi boş geçilemez..."}]}>
                <Input placeholder='Ürün fiyatı giriniz...' />
            </Form.Item>
            <Form.Item label="Ürün Açıklaması" name="description" >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="colors" label="Ürün Renkleri">
                <Checkbox.Group options={colors} />
            </Form.Item>
            <Form.Item name="stock" label="Stok Miktarı">
                <Input placeholder='Stok miktarını giriniz...' />
            </Form.Item>
            <Form.Item label="Kategori" name="category">
                <Select placeholder="Kategori seçiniz...">
                {
                    categories.map(category => (
                        <Select.Option key={category._id} value={category._id}>
                        {category.name}
                        </Select.Option>
                    ))
                }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Ürün Güncelle</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default UpdateProduct