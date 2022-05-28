import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const CheckoutForm = ({book}) => {
    const {_id,price,email}=book;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [success, setSuccess] = useState('');
    useEffect(()=>{
        fetch("http://localhost:5000/create-payment-intent",{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
        .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
        
    },[price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          setCardError(error?.message || '')
          setSuccess('')
          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email:email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
            const payment = {
                book: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                console.log(data);
            })


        }
    }
    
  return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button class="btn-success btn-sm rounded-lg" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
       success && <div className='text-green-500'>
       <p>{success}  </p>
       <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
   </div>
    }
    </>
  )
}

export default CheckoutForm