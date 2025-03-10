
import React, {use} from 'react'
import {fetchData} from './api'
import { UserInterface } from './User.interface'

const UserListComponent = () => {
    const users: UserInterface[] = use(fetchData)

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserListComponent
