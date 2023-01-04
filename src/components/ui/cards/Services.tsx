import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadServices } from '../../../redux/actions/servicesActions'
import Card from '../../UI-kit/Card'
import CardList from '../../UI-kit/CardList'

const Services = () => {
    const services = useSelector((state: any) => state.servicesStore.services)
    const dispatch = useDispatch()
    const load = loadServices(dispatch)

    useEffect(() => {
        load()
    }, [])

  return (
    <Card>
         <h3 className="font-semibold">Услуги</h3>
            <CardList items={services} />
            <div className="flex flex-row gap-2 justify-center">
                <button className="font-bold text-center hover:text-slate-700">
                    Посмотреть все услуги
                </button>
                <button className="font-bold text-center hover:text-slate-700">
                    Добавить услугу
                </button>
            </div>
    </Card>
  )
}

export default Services
