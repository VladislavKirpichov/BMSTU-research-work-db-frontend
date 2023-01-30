import React, { FormEventHandler, MouseEventHandler } from 'react'
import { Employer } from '../../../redux/reducers/employersReducer'
import PrimaryButton from '../buttons/PrimaryButton'
import Form from '../forms/Form'
import Input from '../forms/Input'
import Modal from './Modal'

type Props = {
    open: boolean
    onClickModal: MouseEventHandler
    isNew: boolean
    employer?: Employer
    onSubmit?: FormEventHandler<Element>
}

const EmployerModal = (props: Props) => {
    return (
        <Modal open={props.open} onClickModal={props.onClickModal}>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">
                    {props.isNew ? 'Добавить услугу' : 'Изменить услугу'}
                </h1>
                <Form onSubmit={props.onSubmit}>
                    <Input
                        label="Имя сотрудника"
                        name="name"
                        required={true}
                        placeholder={props.employer?.name}
                    />
                    <PrimaryButton>Создать</PrimaryButton>
                </Form>
            </div>
        </Modal>
    );
}

export default EmployerModal
