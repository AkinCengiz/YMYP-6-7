import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  DashboardOutlined,
  FormOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Sider,Header,Footer,Content } = Layout

const AdminLayout = ({children}) => {

    const navigate = useNavigate();
    const items = [
        { key: '1', icon: <DashboardOutlined />, label: 'Dashboard', onClick : () => navigate("/admin")},
        { key: '2', icon: <AppstoreOutlined />, label: 'Kategori',children : [
            { key : "2-1", label : "Kategorileri Listele", onClick : () => navigate("/admin/categories")},
            { key : "2-2", label : "Kategori Ekle", onClick : () => navigate("/admin/categories/create")}
        ]},
        { key: '3', icon: <ShopOutlined />, label: 'Ürün',children : [
            { key : "3-1", label : "Ürünleri Listele", onClick : () => navigate("/admin/products")},
            { key : "3-2", label : "Ürün Ekle", onClick : () => navigate("/admin/products/create")}
        ]},
        { key: '4', icon: <UserOutlined />, label: 'Kullanıcı',children : [
            { key : "4-1", label : "Kullanıcıları Listele"},
            { key : "4-2", label : "Kullanıcı Ekle"}
        ]},
        { key :"5", icon : <FormOutlined />, label:"Yazar", children: [
            { key : "5-1", label : "Yazarları Listele"},
            { key : "5-2", label : "Yazar Ekle"}
        ]}
    ]

  return (
    <div className='admin-layout'>
        <Layout style={{height:"100vh"}}>
            <Sider width="20%" style={{color : "#fff"}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                    style={{fontSize:"1.5rem"}}
                />
            </Sider>
            <Layout>
                <Header style={{color:"#fff"}}>YMYP Mern Stack App</Header>
                <Content >{children}</Content>
                <Footer style={{backgroundColor:"#001529", color:"#fff"}}>Tüm hakları saklıdır</Footer>
            </Layout>
        </Layout>
    </div>
  )
}

export default AdminLayout