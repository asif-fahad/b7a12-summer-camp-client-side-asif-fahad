import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useRoles = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const { data: roles, isloading: isRolesLoading } = useQuery({
        queryKey: ['roles', user?.email],
        enabled: !loading && user != null,
        queryFn: async () => {

            if (!user) {
                throw new Error('User not available.'); // Throw an error if user is not available
            }

            const res = await axiosSecure.get(`/users/admin/${user?.email}`);

            return res.data.message;
        }
    })
    return [roles, isRolesLoading]
};

export default useRoles;