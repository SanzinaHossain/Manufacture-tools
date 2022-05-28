import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4RWHHnjM726u3HvoesrFxy4Wp3n5RUBTpQTfmQkYN69w7dRN7Te5RH4zErenHGRMnzKW4o6OsviF5MGBmS9qTr00S1pY9dYB');
const Payment = () => {
    const {id}=useParams();
    const url=`https://morning-fortress-41399.herokuapp.com/bookings/${id}`;
    const {data:book,isLoading}=useQuery(['bookings',id],()=>fetch(url).then(res=>res.json()))
    if(isLoading)
    {
        return <Loading></Loading>
    }
  return (
    <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title text-black">Please Pay for {book.Pname}</h2>
                    <p class="text-black">Please pay: ${book.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm book={book} />
                    </Elements>
                </div>
            </div>
        </div>
  )
}

export default Payment