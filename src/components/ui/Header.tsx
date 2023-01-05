import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { ProfileState } from '../../redux/reducers/profileReducer';

const Header = () => {
    const profile: ProfileState = useSelector((state: any) => state.profileStore);
    
    return (
        <nav className="navbar fixed w-screen navbar-expand-lg shadow-sm py-2 bg-white">
            <div className="px-6 w-full flex flex-wrap items-wrap justify-between">
                <div className="grow">
                    <Link to="/">Hello world</Link>
                </div>
                <p className="grow text-center">
                    <Link to={'/services '}>Посмотреть все услуги</Link>
                </p>
                {profile.authorized ? (
                    <p className="grow text-end">{profile.name}</p>
                ) : (
                    <div className="flex grow flex-row gap-4 justify-end">
                        <Link to={'signup'}>
                            <p className="hover:text-slate-700">
                                Зарегестрироваться
                            </p>
                        </Link>
                        <Link to={'signin'}>
                            <p className="hover:text-slate-700">Войти</p>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header
