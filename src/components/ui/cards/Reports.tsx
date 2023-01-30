import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateReport, load } from '../../../redux/actions/reportsActions'
import { Report } from '../../../redux/reducers/reportsReducer'
import PrimaryButton from '../buttons/PrimaryButton'

const Reports = () => {
    const dispatch = useDispatch()
    const reports = useSelector((state: any) => state.reportsStore.reports)
    const loadReports = load(dispatch)

    useEffect(() => {
        loadReports()
    }, [])

    const handleNewReport = async () => {
        await generateReport()
        loadReports()
    }

    return (
        <div>
            <h3>Отчеты</h3>
            {reports.map((report: Report) => (
                <div className='flex p-2'>
                    <p>Заявки: {report.leads || 0}</p>
                    <p>Создано: {report.createdDate}</p>
                </div>
            ))}
            <div>
                <PrimaryButton onClick={handleNewReport}>Сгенерировать отчет</PrimaryButton>
            </div>
        </div>
    )
}

export default Reports
