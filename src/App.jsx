import { Suspense } from 'react'
import UserListComponent from './UserListComponent'

const App = () => {
  return (
    <div style={{ textAlign: 'center', width: '700px', margin: '0 400px', color: 'blue', backgroundColor: 'orange' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Users</h1>
        <UserListComponent />
      </Suspense>
    </div>
    
  )
}

export default App

