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

    return (
        <Card>
            <h3 className='font-semibold'>Заявки</h3>
            {leads?.slice(0, limit).map((lead: Lead) => (
                <React.Fragment key={lead.id}>
                    <div className='flex flex-row gap-2'>
                        <p>Email: {lead.email}</p>
                        <p>Name: {lead.name}</p>
                    </div>
                    <div>
                        <p>To: {(lead as any).service_name}</p>
                    </div>
                </React.Fragment>
            ))}
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
