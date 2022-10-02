import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';


const Cart = () => {

  const cart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch();

  const Remove = (item) => {
      dispatch({type: 'REMOVE_CART', payload: item})
  }

  const columns = [
    {
        title: 'Family Name',
        dataIndex: 'familyName',
        key: 'givenName',
    },
    {
        title: 'Given Name',
        dataIndex: 'givenName',
        key: 'givenName',
    },        
    {
        title: 'Nationality',
        dataIndex: 'nationality',
        key: 'nationality',
    },
    {
        title: 'Permanent Number',
        dataIndex: 'permanentNumber',
        key: 'permanentNumber',
    },
    {
        title: 'Website',
        dataIndex: 'url',
        key: 'url',
    },
    {
      title: "Remove From Favorites",
      dataIndex: "driverId",
      key: "id",
      render: (value, data) => <Button onClick={() => Remove(data)} type='danger'>Delete Driver</Button>,
    
    }
];


  return (
    <div>
      <Content style={{ padding: '0 100px' }}>
        <Table columns={columns} dataSource={cart} rowKey='id' />
      </Content>
    </div>
  )
}

export default Cart