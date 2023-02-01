import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileState } from '../../../redux/reducers/profileReducer';
import { Service } from '../../../redux/reducers/servicesReducer';
import PrimaryButton from '../buttons/PrimaryButton';
import UnavailableButton from '../buttons/UnavailableButton';
import ServiceModal from './ServiceModal';

type Props = {
    service: Service;
};

const ServiceCard = (props: Props) => {
    const profile: ProfileState = useSelector(
        (state: any) => state.profileStore
    );

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((open) => !open);
    }

    return (
        <>
            <ServiceModal
                open={open}
                service={props.service}
                onClickModal={toggleOpen}
            />
            <div className="flex flex-col gap-2 md:col-span-1 col-span-2 p-4 rounded-xl border-slate-100 border">
                <h1 className="font-bold">{props.service.name}</h1>
                <p>{props.service.description}</p>
                <p>{props.service.cost} ₽</p>
                <div>
                    {profile.authorized ? (
                        <PrimaryButton onClick={toggleOpen}>
                            Записаться
                        </PrimaryButton>
                    ) : (
                        <UnavailableButton>Записаться</UnavailableButton>
                    )}
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
