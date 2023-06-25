import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectClasses/${user?.email}`)
            return res.data;
        },
    })

    return [cart, refetch]
};

export default useCart;