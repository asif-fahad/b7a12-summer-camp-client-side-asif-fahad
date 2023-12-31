import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/images/logo.png';
import { AuthContext } from '../../../providers/AuthProviders';
import ThemeToggle from '../../Home/ThemeToggle/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    }

    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {isDropdownOpen && (
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ThemeToggle />
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>

                            <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Instructors</NavLink>

                            <NavLink to='/classes' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Classes</NavLink>

                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>

                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>About</NavLink>

                            {user ? <>
                                <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Dashboard</NavLink>


                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <button onClick={handleLogOut} className='btn btn-success btn-sm'>Logout</button>
                            </> : <>
                                <Link to='/login'><button className='btn btn-info btn-sm'>Login</button></Link>
                            </>}
                        </ul>
                    )}
                </div>
                <Link to='/' className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Fahad's Toys" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark">Fahad's Sports</span>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 flex items-center">
                    <ThemeToggle />
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>

                    <NavLink to='/instructors' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Instructors</NavLink>

                    <NavLink to='/classes' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Classes</NavLink>

                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>

                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>About</NavLink>

                    {user ? <>
                        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Dashboard</NavLink>


                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>

                        <button onClick={handleLogOut} className='btn text-white bg-gray-600 btn-sm'>Logout</button>
                    </> : <>
                        <Link to='/login'><button className='btn text-white bg-gray-600 btn-sm'>Login</button></Link>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
