import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import { FaHome, FaChalkboardTeacher, FaUserShield, FaUser, FaMoneyBill } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';

const Dashboard = () => {

    useTitle('Dashboard');

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


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

                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/manageclasses'><FaUserShield></FaUserShield>Manage Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/manageusers'><FaUserShield></FaUserShield>Manage Users</NavLink></li>
                                </> :
                                isInstructor ?
                                    <>
                                        <li><NavLink to='/dashboard/addaclass'><FaChalkboardTeacher></FaChalkboardTeacher>Add a Class</NavLink></li>
                                        <li><NavLink to='/dashboard/myclasses'><FaChalkboardTeacher></FaChalkboardTeacher>My Classes</NavLink></li>
                                    </> :
                                    <>
                                        <li><NavLink to='/dashboard/myenrolledclasess'><FaUser></FaUser>My Selected Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/myselectedclasses'><FaUser></FaUser>My Enrolled Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/payment'><FaMoneyBill></FaMoneyBill>Payment</NavLink></li>
                                    </>
                        }


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;