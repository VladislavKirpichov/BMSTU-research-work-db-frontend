import React, { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import {useDispatch, useSelector, useStore} from 'react-redux'
import { Link } from 'react-router-dom'
import { createService, deleteService, loadServices, updateService } from '../../../redux/actions/servicesActions'
import { Service, ServicesState } from '../../../redux/reducers/servicesReducer'
import ServiceModal from '../modal/ServiceModal'
import Card from './Card'
import CardList from './CardList'

const Services = () => {
    const services = useSelector((state: any) => state.servicesStore.services)
    // @ts-ignore
    const getState = useStore().getState
    const dispatch = useDispatch()
    const load = loadServices(dispatch)
    const createLoader = createService(dispatch)
    const deleteLoader = deleteService(dispatch)
    const updateLoader = updateService(dispatch)

    const [open, setOpen] = useState(false)

    const toggleOpen: MouseEventHandler = (e: MouseEvent<Element>) => {
        setOpen(open => !open)
    }

    useEffect(() => {
        load()
    }, [])

    const createServiceHandler: MouseEventHandler<HTMLFormElement> = (
        e: MouseEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            id: 0,
                name: formData.get('name') as string,
                cost: parseInt(formData.get('cost') as string) as number,
                description: (formData.get('description') || '') as string,
        }

        console.log(data)
        createLoader(data, getState);

        // @ts-ignore
        toggleOpen()
    };

    const updateServiceHandler = (service: unknown): MouseEventHandler<HTMLFormElement> => {
        return (e: MouseEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);

            updateLoader(
                {
                    id: 0,
                    name: formData.get('name') as string,
                    cost: parseInt(formData.get('cost') as string) as number,
                    description: (formData.get('description') || '') as string,
                },
                getState
            );

            // @ts-ignore
            toggleOpen();
        };
    }

    const deleteServiceHandler = (service: unknown): MouseEventHandler<HTMLButtonElement> => {
        return (e: any) => {
            e.preventDefault();
            console.log(service)
            deleteLoader((service as Service).id, getState);
        };
    }

  return (
      <Card>
          <ServiceModal open={open} onClickModal={toggleOpen} isNew={true} onSubmit={createServiceHandler} />
          <h3 className="font-semibold">Услуги</h3>
          <CardList items={services} onEdit={updateServiceHandler} onDelete={deleteServiceHandler} />
          <div className="flex flex-row gap-2 justify-center">
              <Link to="/services">
                  <p className="font-bold text-center hover:text-slate-700">
                      Посмотреть все услуги
                  </p>
              </Link>
              <button onClick={toggleOpen} className="font-bold text-center hover:text-slate-700">
                  Добавить услугу
              </button>
          </div>
      </Card>
  );
}

export default Services
