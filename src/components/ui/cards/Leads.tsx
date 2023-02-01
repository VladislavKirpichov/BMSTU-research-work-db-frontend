import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadLeads } from '../../../redux/actions/leadsActions'
import { Lead } from '../../../redux/reducers/leadsReducer'
import Card from './Card'

const LIMIT_RANGE = 5
const DEFAULT_LIMIT = 2

const Leads = () => {
    const dispatch = useDispatch()
    const leads = useSelector((state: any) => state.leadsStore.leads)
    const load = loadLeads(dispatch)
    const [limit, setLimit] = useState(DEFAULT_LIMIT)

    useEffect(() => {
        load()
    }, [])

    const handleMore: React.MouseEventHandler = (e: React.MouseEvent) => {
        setLimit((limit: any) => limit + LIMIT_RANGE)
    }

    console.log(leads)

    return (
        <Card>
            <h3 className='font-semibold'>Заявки</h3>
            <div className='flex flex-col gap-4'>
                {leads?.slice(0, limit).map((lead: Lead) => (
                    <div className='flex flex-col gap-2' key={lead.id}>
                        <p>Email пользователя: {lead.email}</p>
                        <p>Название услуги: {(lead as any).service_name}</p>
                    </div>
                ))}
            </div>
            {leads?.length >= limit &&
                <button
                    onClick={handleMore}
                    className="p-2 rounded-lg border-solid border-slate-100 hover:border-slate-200 border"
                >
                    Загрузить еще
                </button>
            }
        </Card>
    )
}

export default Leads
