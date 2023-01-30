import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Admin } from '../../redux/reducers/adminReducer';
import { ProfileState } from '../../redux/reducers/profileReducer';

const Header = () => {
    const profile: ProfileState = useSelector(
        (state: any) => state.profileStore
    );
    const admin: Admin = useSelector((state: any) => state.adminStore.admin)

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(open => !open)

    return (
        <nav className="navbar flex fixed w-screen navbar-expand-lg shadow-sm py-2 bg-white relative">
            <div className="px-6 w-full flex flex-wrap items-wrap justify-between">
                <div className="grow">
                    <Link to="/">Hello world</Link>
                </div>
                <p className="grow text-center">
                    <Link to={'/services '}>Посмотреть все услуги</Link>
                </p>
                {profile.authorized && (
                    <>
                    <button onClick={toggleOpen} className="grow text-end">{profile.name}</button>
                    {open && (
                        <div className={`${open ? 'block' : 'hidden'} justify-self-end p-2 absolute bg-slate-50 shadow rounded-lg`}>
                            <button className='hover:bg-slate-100 p-2 rounded-md'>Выйти</button>
                        </div>
                    )}
                    </>
                )}
                {admin.authorized && (
                    <p>Admin</p>
                )}
                {!profile.authorized && !admin.authorized && (
                    <div className="flex grow flex-row gap-4 justify-end">
                    <Link to={'/signup'}>
                            <p className="hover:text-slate-700">
                                Зарегестрироваться
                            </p>
                        </Link>
                        <Link to={'/signin'}>
                            <p className="hover:text-slate-700">Войти</p>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
