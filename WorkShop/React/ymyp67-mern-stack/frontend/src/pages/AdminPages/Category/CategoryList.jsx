import { useContext } from 'react'
import { Button, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../../contexts/CategoryProvider';

const CategoryList = () => {
    const {deleteCategory,categories} = useContext(CategoryContext);
    const navigate = useNavigate();

       
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
        <Table 
        columns={columns} 
        dataSource={categories} 
        rowKey={(record) => record._id} 
        pagination={{ pageSize: 10 }}
        scroll={{ y: 600 }}/>
    </div>
  )
}

export default CategoryList