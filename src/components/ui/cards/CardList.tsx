import React, { useState, MouseEventHandler, MouseEvent } from 'react'
import { Service } from '../../../redux/reducers/servicesReducer';
import ServiceModal from '../modal/ServiceModal';

type Props = {
    items: unknown[];
    onDelete?: (item: unknown) => MouseEventHandler<HTMLButtonElement>;
    onEdit?: (item: unknown) => MouseEventHandler<HTMLFormElement>;
};

const MAX_ITEMS_COUNT = 5;

const CardList = (props: Props) => {
    const [open, setOpen] = useState(false)
    const [service, setService] = useState({} as Service)

    const toggleOpen: MouseEventHandler = (e: MouseEvent<Element>) => {
        setOpen(open => !open)
    }

    const handleEdit = (service: Service, e: MouseEvent<Element>) => {
        setService(service)
        toggleOpen(e)
    }

    return (
      <div className="flex flex-col gap-2">
          <ServiceModal
              open={open}
              onClickModal={toggleOpen}
              isNew={false}
              service={service}
              onSubmit={props.onEdit}
          />
          {props.items
              .slice(0, MAX_ITEMS_COUNT)
              .map((item: any, index: number) => (
                  <div key={item.id}>
                      <div className="flex flex-row gap-2 items-center justify-between">
                          <p className="truncate">{item.name}</p>
                          <div className="flex flex-row gap-2">
                              {props.onEdit && (
                                  <button
                                      onClick={handleEdit.bind(this)}
                                      className="p-2 rounded-lg border-solid border-slate-100 hover:border-slate-200 border">
                                      edit
                                  </button>
                              )}
                              {props.onDelete && (
                                  <button
                                      onClick={
                                          props.onDelete && props.onDelete(item)
                                      }
                                      className="p-2 rounded-lg border-solid border-slate-100 hover:border-slate-200 border">
                                      delete
                                  </button>
                              )}
                          </div>
                      </div>
                      {index !== props.items.length - 1 && (
                          <hr className="border-slate-100 border"></hr>
                      )}
                  </div>
              ))}
      </div>
  );
}

export default CardList