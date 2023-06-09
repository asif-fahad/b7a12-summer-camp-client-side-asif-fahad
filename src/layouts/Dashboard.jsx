import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [isAdmin] = useAdmin();


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-4">
                        {/* Sidebar content here */}
                        <li><NavLink>Manage Classes</NavLink></li>
                        <li><NavLink>Manage Users</NavLink></li>


                        <div className="divider">OR</div>
                        <li><NavLink to='/'>Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;