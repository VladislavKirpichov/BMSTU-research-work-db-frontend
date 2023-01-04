import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loadUsers } from '../../../redux/actions/userActions'
import Card from '../../UI-kit/Card'
import CardList from '../../UI-kit/CardList'

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
                <button className="font-bold text-center hover:text-slate-700">
                    Посмотреть всех пользователей
                </button>
            </div>
        </Card>
    );
}

export default Users