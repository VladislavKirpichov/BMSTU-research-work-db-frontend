import React, { FormEventHandler, MouseEventHandler } from 'react'
import { Service } from '../../../redux/reducers/servicesReducer'
import PrimaryButton from '../buttons/PrimaryButton'
import Form from '../forms/Form'
import Input from '../forms/Input'
import Modal from './Modal'

type Props = {
    open: boolean
    onClickModal: MouseEventHandler
    isNew: boolean
    service?: Service
    onSubmit?: FormEventHandler<Element>
}

const ServiceModal: React.FC<Props> = (props: Props) => {
  return (
      <Modal open={props.open} onClickModal={props.onClickModal}>
          <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                  {props.isNew ? 'Добавить услугу' : 'Изменить услугу'}
              </h1>
              <Form onSubmit={props.onSubmit}>
                  <Input
                      label="Название услуги"
                      name="name"
                      required={true}
                      placeholder={props.service?.name}
                  />
                  <Input
                      label="Описание услуги"
                      name="description"
                      required={true}
                      placeholder={props.service?.description}
                  />
                  <PrimaryButton>Создать</PrimaryButton>
              </Form>
          </div>
      </Modal>
  );
}

export default ServiceModal
