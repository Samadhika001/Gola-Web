import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const PaymentGateway = () => {

  const onToken = (token) =>{
     console.log(token)
  }  
  return (
    <div className='flex pt-[40px] justify-center'>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51NtRbHFUmqPowUxX7Be9yYS9GKaElXByPYJmtUsR5826tRwtfk9wvwz2ivisdeltR0pMldHhSsLMeVpC375OPRRJ00V1nWG9VU"
        name='Payment for package'
      />
    </div>
  );
}

export default PaymentGateway;
 