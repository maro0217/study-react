import React from 'react'
import { Header } from 'src/components/Header'
import { Users as UsersComponent } from 'src/components/Users'


const Users = () => {
  return (
    <div>
        <Header/>
        <UsersComponent/>
    </div>
  )
}

export default Users