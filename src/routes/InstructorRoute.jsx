import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import useRoles from '../hooks/useRoles';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [roles, isRolesLoading] = useRoles();
    const location = useLocation();
    console.log(roles === 'Instructor', roles)

    if (loading || isRolesLoading || roles !== 'Instructor') {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && roles === 'Instructor') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;