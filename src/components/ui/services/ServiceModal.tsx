import React, { MouseEventHandler } from 'react'
import { Service } from '../../../redux/reducers/servicesReducer'
import Modal from '../modal/Modal'
import PrimaryButton from '../buttons/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { apply } from '../../../redux/actions/servicesActions'

type Props = {
    service: Service
    open: boolean
    onClickModal: MouseEventHandler
}

const ServiceModal: React.FC<Props> = (props: Props) => {
    const userId = useSelector((state: any) => state.profileStore.id)

    const handleApply: React.MouseEventHandler<Element> = (e: React.MouseEvent) => {
        apply(userId, props.service.id)
    }

    return (
        <Modal open={props.open} onClickModal={props.onClickModal}>
            <div className="flex flex-col gap-4">
                <h1 className="text-xl text-left font-semibold rounded-lg bg-slate-0">
                    Подтвердите действие
                </h1>
                <p>
                    <span className="font-semibold">Название услуги: </span>
                    {props.service.name}
                </p>
                <p>
                    <span className="font-semibold">Описание: </span>
                    {props.service.description}
                </p>
                <PrimaryButton onClick={handleApply}>Записаться</PrimaryButton>
            </div>
        </Modal>
    );
}

export default ServiceModal
