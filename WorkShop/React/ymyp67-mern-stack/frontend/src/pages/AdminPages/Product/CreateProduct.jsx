import { Button, Checkbox, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'

const { TextArea } = Input;

const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [form] = Form.useForm();

    const getCategories = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/categories");
            if(response.ok){
                const data = await response.json();
                setCategories(data);
            }else{
                console.log("Kategori getirilemedi...");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    },[])

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
                <Button type='primary' htmlType='submit'>Ürün Ekle</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateProduct