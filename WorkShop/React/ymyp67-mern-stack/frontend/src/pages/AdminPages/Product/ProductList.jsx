import React from 'react'

const ProductList = () => {
  return (
    <div>
        <h2>Ürünler</h2>
        <Table 
        columns={columns} 
        dataSource={} 
        rowKey={(record) => record._id} 
        pagination={{ pageSize: 10 }}
        scroll={{ y: 600 }}/>
    </div>
  )
}

export default ProductList