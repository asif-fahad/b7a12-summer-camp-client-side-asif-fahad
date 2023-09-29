import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import useRoles from '../hooks/useRoles';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [roles, isRolesLoading] = useRoles();
    const location = useLocation();

    if (loading || isRolesLoading || roles !== 'Admin') {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && roles === 'Admin') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;