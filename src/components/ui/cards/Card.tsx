import React from 'react'

type Props = {
    children: React.ReactNode
}

const Card = (props: Props) => {
    return (
        <div className="px-6 py-8 bg-slate-50 rounded-large md:col-span-6 col-span-12 flex flex-col gap-4">
            {props.children}
        </div>
    );
};

export default Card
