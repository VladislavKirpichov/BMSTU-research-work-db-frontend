import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import {useDispatch, useSelector, useStore} from 'react-redux'
import { Link } from 'react-router-dom'
import { createEmployer, deleteEmployer, loadEmployers, updateEmployer } from '../../../redux/actions/employersActions'
import { Employer } from '../../../redux/reducers/employersReducer'
import EmployerModal from '../modal/EmployerModal'
import Card from './Card'
import CardList from './CardList'

const Employers = () => {
    const employers = useSelector((state: any) => state.employersStore.employers)
    // @ts-ignore
    const getState = useStore().getState
    const dispatch = useDispatch()
    const load = loadEmployers(dispatch)
    const createLoader = createEmployer(dispatch)
    const deleteLoader = deleteEmployer(dispatch)
    const updateLoader = updateEmployer(dispatch)

    const [open, setOpen] = useState(false)

    const toggleOpen: MouseEventHandler = (e: MouseEvent<Element>) => {
        setOpen(open => !open)
    }

    useEffect(() => {
        load()
    }, [])

    const createEmployerHandler: MouseEventHandler<HTMLFormElement> = (
        e: MouseEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        createLoader(
            {
                id: 0,
                name: formData.get('name') as string,
            },
            getState
        );

        // @ts-ignore
        toggleOpen()
    };

    const updateEmployerHandler = (employer: unknown) => {
        return (e: MouseEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);

            updateLoader(
                {
                    id: 0,
                    name: formData.get('name') as string,
                },
                getState
            );

            // @ts-ignore
            toggleOpen();
        };
    }

    const deleteEmployerHandler = (employer: unknown): MouseEventHandler<HTMLButtonElement> => {
        return (e: any) => {
            e.preventDefault()
            deleteLoader((employer as Employer).id, getState)
        }
    }

  return (
    <Card>
        <EmployerModal open={open} onClickModal={toggleOpen} isNew={true} onSubmit={createEmployerHandler} />
        <h3 className="font-semibold">Сотрудники</h3>
          <CardList items={employers} onDelete={deleteEmployerHandler} />
          <div className="flex flex-row gap-2 justify-center">
              <Link to="/admin/employers">
                  <p className="font-bold text-center hover:text-slate-700">
                      Посмотреть всех сотрудников
                  </p>
              </Link>
              <button onClick={toggleOpen} className="font-bold text-center hover:text-slate-700">
                  Добавить сотрудника
              </button>
          </div>
    </Card>
  )
}

export default Employers
