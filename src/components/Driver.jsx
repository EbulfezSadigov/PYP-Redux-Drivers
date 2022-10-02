import { Button, Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../action/driverAction';

function Driver() {
    let dispatch = useDispatch()
    const driver = useSelector(state => state.driverReducer);
    const cart = useSelector(state => state.cartReducer)

    useEffect(() => {
        dispatch(getDrivers())
    }, [dispatch])

    const add = (item) => {
        if (!cart.includes(item)) {
            dispatch({ type: 'ADD_TO_CART', payload: item })
        }
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
            render: (value, data) => <a href={data.url} target='_blank' rel='noreferrer'>Biography</a>
        },
        {
            title: "Add to Favorites",
            dataIndex: "driverId",
            key: "driverId",
            render: (value, data) => <Button onClick={() => add(data)} type='primary'>Add to Favorites</Button>,
        }
    ];

    return (
        <Table columns={columns} dataSource={driver} style={{ paddingLeft: 50, paddingRight: 50 }} key={driver.driverId} />
    )
}

export default Driver