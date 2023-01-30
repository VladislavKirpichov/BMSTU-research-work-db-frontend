import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { loadUsers } from '../../../redux/actions/userActions'
import Card from './Card'
import CardList from './CardList'

const Users = () => {
    const users = useSelector((state: any) => state.usersStore.users)
    const dispatch = useDispatch()
    const load = loadUsers(dispatch)

    useEffect(() => {
      load()
    }, [])

    return (
        <Card>
            <h3 className="font-semibold">Пользователи</h3>
            <CardList items={users} />
            <div className="flex flex-row gap-2 justify-center">
                <Link to="/admin/users">
                    <p className="font-bold text-center hover:text-slate-700">
                        Посмотреть всех пользователей
                    </p>
                </Link>
            </div>
        </Card>
    );
}

export default Users