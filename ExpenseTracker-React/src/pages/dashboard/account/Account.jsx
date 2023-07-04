import React from 'react'
import NavbarWithDrawer from '../../../features/NavbarWithDrawer'
import AccountForm from './AccountForm'

const Account = () => {
  return (
    <div className="accountContainer">
        <NavbarWithDrawer/>
        <AccountForm/>
    </div>
  )
}

export default Account