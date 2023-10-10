import React from 'react'
import NavBar from '../features/navbar/Navbar'
import UserOrders from '../features/user/components/UserOrders'

function UserOrdersPage() {
  return (
    <NavBar>
        <h1 className='mx-auto text-3xl'>My Orders</h1>
        <UserOrders />
    </NavBar>
  )
}

export default UserOrdersPage