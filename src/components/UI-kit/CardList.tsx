import React from 'react'

type Props = {
    items: unknown[];
}

const MAX_ITEMS_COUNT = 5;

const CardList = (props: Props) => {
  return (
      <div className="flex flex-col gap-2">
          {props.items
              .slice(0, MAX_ITEMS_COUNT)
              .map((item: any, index: number) => (
                  <>
                      <div className="flex flex-row gap-2 items-center justify-between">
                          <p className="truncate">{item.name}</p>
                          <div className="flex flex-row gap-2">
                              <button className="p-2 rounded-lg border-solid border-slate-100 hover:border-slate-200 border">
                                  edit
                              </button>
                              <button className="p-2 rounded-lg border-solid border-slate-100 hover:border-slate-200 border">
                                  delete
                              </button>
                          </div>
                      </div>
                      {index !== props.items.length - 1 && (
                          <hr className="border-slate-100 border"></hr>
                      )}
                  </>
              ))}
      </div>
  );
}

export default CardList