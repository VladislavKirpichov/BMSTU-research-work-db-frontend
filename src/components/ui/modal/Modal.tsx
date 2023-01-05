import React, { EventHandler, MouseEventHandler, ReactNode, useState } from 'react'

type Props = {
    open: boolean;
    children: ReactNode;
    onClickModal: MouseEventHandler
}

// TODO:  forwardRef
const Modal: React.FC<Props> = (props: Props) => {
    return (
        <div
            onClick={props.onClickModal}
            className={`h-screen top-0 left-0 fixed w-screen bg-slate-800/30
                        flex items-center justify-center
                        ${props.open ? 'block' : 'hidden'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-50 rounded-lg p-4">
                {props.children}
            </div>
        </div>
    );
}

export default Modal
