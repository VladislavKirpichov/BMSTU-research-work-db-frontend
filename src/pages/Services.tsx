import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../components/ui/Header'
import ServicesList from '../components/UI-kit/services/ServicesList'
import { loadServices } from '../redux/actions/servicesActions'

const Services = () => {
    const services = useSelector((state: any) => state.servicesStore.services)
    const dispatch = useDispatch()
    const load = loadServices(dispatch)

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <Header />
            <div className="container py-24">
                <h1 className="font-bold text-4xl mb-4">Услуги</h1>
                <ServicesList />
            </div>
        </>
    );
}

export default Services
