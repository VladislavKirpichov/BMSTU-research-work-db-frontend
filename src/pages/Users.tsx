import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../components/ui/cards/Card'
import Header from '../components/ui/Header'
import { loadUsers } from '../redux/actions/userActions'
import { User } from '../redux/reducers/userReducer'


const Users = () => {
    const users = useSelector((state: any) => state.usersStore.users)
    const dispatch = useDispatch()
    const load = loadUsers(dispatch)

    useEffect(() => {
        load()
      }, [])

  return (
      <>
          <Header />
          <div className="container py-24">
              <h1 className="font-bold text-4xl mb-4">Пользователи</h1>
              <div className="flex flex-col gap-2">
                  {users.map((user: User) => (
                      <Card>
                          <p>{user.name}</p>
                      </Card>
                  ))}
              </div>
          </div>
      </>
  );
}

export default Users
