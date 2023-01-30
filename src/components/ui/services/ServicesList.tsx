import React, {useState, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Service } from '../../../redux/reducers/servicesReducer'
import PrimaryButton from '../buttons/PrimaryButton'
import ServiceCard from './ServiceCard'

const DEFAULT_OFFSET = 10
const OFFSET_DIFF = 10

const ServicesList = () => {
    const services = useSelector((state: any) => state.servicesStore.services);
    const [offset, setOffset] = useState(DEFAULT_OFFSET);

    // const increaseOffset: React.MouseEventHandler<HTMLButtonElement> = (
    //     e: React.MouseEvent<HTMLElement, MouseEvent>
    // ) => {
    //     e.preventDefault();
    //     console.log(offset);
    //     setOffset((offset) => offset + OFFSET_DIFF);
    // };

    const increaseOffset = useCallback(
        (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
            console.log(offset);
            setOffset((offset) => offset + OFFSET_DIFF);
        },
        [offset]
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 flex-col gap-2">
                {services?.slice(0, offset).map((service: Service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            {services?.length > offset && (
                <div className='flex items-center justify-center'>
                    <PrimaryButton onClick={increaseOffset}>
                       Загрузить еще
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
}

export default ServicesList
