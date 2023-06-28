import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../../hooks/useCart';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const { id } = useParams();
    const singleClass = cart.find(c => c._id === id);
    console.log(singleClass)

    return (
        <div className='w-2/3'>
            <div className='m-8 text-center'>
                <h1 className='text-6xl font-bold'>Payment</h1>
                <p className='my-2'>Please use stripe test cards for a payment <span className='text-green-600'>$</span></p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={singleClass} price={singleClass?.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;