import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const { id } = useParams();
    const singleClass = cart.find(c => c._id === id);
    // console.log(singleClass);
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <h1 className='text-5xl font-bold text-center my-8'>Payments</h1>
            <p className='text-center font-semibold mb-10'>Please Pay <span className='text-orange-600'>${singleClass?.price}</span> for your dance <span className='text-orange-600'>{singleClass?.className}</span> class</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={singleClass} price={singleClass?.price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;