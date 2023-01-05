import React, { MouseEventHandler } from 'react'
import { Service } from '../../../redux/reducers/servicesReducer'
import Modal from '../../ui/modal/Modal'
import PrimaryButton from '../buttons/PrimaryButton'

type Props = {
    service: Service
    open: boolean
    onClickModal: MouseEventHandler
}

const ServiceModal: React.FC<Props> = (props: Props) => {
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
              <PrimaryButton>Записаться</PrimaryButton>
          </div>
      </Modal>
  );
}

export default ServiceModal
