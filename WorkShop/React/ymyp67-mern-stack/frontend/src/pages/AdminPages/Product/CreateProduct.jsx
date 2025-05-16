import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'

const { TextArea } = Input;

const CreateProduct = () => {
    const [form] = Form.useForm();

    const colors = ["Black","White","Grey","Red","Green","Brown","Blue","Orange","Yellow"];
  return (
    <div>
        <h2 style={{marginBottom : "10px"}}>Ürün Ekle</h2>
        <Form form={form} layout='vertical' onFinish={() => {}} initialValues={{colors:["Black","White","Red"]}} >
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
            <Form.Item>
                <Button type='primary' htmlType='submit'>Ürün Ekle</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateProduct