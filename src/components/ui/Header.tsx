import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { callApi } from '../../api/network';
import { logoutAdmin } from '../../redux/actions/adminActions';
import { Admin } from '../../redux/reducers/adminReducer';
import { ProfileState } from '../../redux/reducers/profileReducer';

const Header = () => {
    const profile: ProfileState = useSelector((state: any) => state.profileStore, shallowEqual);
    const admin: Admin = useSelector((state: any) => state.adminStore.admin)
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(open => !open)

    const logout = () => {
        logoutAdmin(dispatch)
    }

    return (
        <nav className="navbar flex fixed w-screen navbar-expand-lg shadow-sm py-2 bg-white relative">
            <div className="px-6 w-full flex flex-wrap items-wrap justify-between">
                <div className="grow">
                    <Link to="/"><p className='font-medium text-lg'>Child center</p></Link>
                </div>
                <p className="grow text-center">
                    <Link to={'/services '}>Посмотреть все услуги</Link>
                </p>
                {profile.authorized && (
                    <>
                        <button onClick={toggleOpen} className="grow text-end">{profile.name}</button>
                        {open && (
                            <div className={`${open ? 'block' : 'hidden'} justify-self-end p-2 absolute bg-slate-50 shadow rounded-lg`}>
                                <button onClick={logout} className='hover:bg-slate-100 p-2 rounded-md'>Выйти</button>
                            </div>
                        )}
                    </>
                )}
                {admin.authorized && (
                    <div className='flex flex-row gap-2 align-center justify-center'>
                        <p>Admin</p>
                        <button onClick={logout} className='bg-slate hover:bg-slate-100 rounded-lg'>Выйти</button>
                    </div>
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
