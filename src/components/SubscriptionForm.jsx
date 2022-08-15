import React, { useState } from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

const SubscriptionForm = (props) => {
  const { subCost } = props;
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <div className="subform">
      {paymentSuccess ? (
        <h1>Payment sucessful </h1>
      ) : (
        <PaymentForm
          /**
           * Identifies the calling form with a verified application ID generated from
           * the Square Application Dashboard.
           */
          applicationId={process.env.REACT_APP_SQUARE_APP_ID}
          /**
           * Invoked when payment form receives the result of a tokenize generation
           * request. The result will be a valid credit card or wallet token, or an error.
           */
          cardTokenizeResponseReceived={(token, buyer) => {
            console.info({ token, buyer });
            setPaymentSuccess(token.status === 'OK' ? true : false);
          }}
          /**
           * This function enable the Strong Customer Authentication (SCA) flow
           *
           * We strongly recommend use this function to verify the buyer and reduce
           * the chance of fraudulent transactions.
           */
          createVerificationDetails={() => ({
            // amount: '1.00',
            amount: subCost,
            /* collected from the buyer */
            billingContact: {
              addressLines: ['123 Main Street', 'Apartment 1'],
              familyName: 'Doe',
              givenName: 'John',
              countryCode: 'GB',
              city: 'London',
            },
            currencyCode: 'GBP',
            intent: 'CHARGE',
          })}
          /**
           * Identifies the location of the merchant that is taking the payment.
           * Obtained from the Square Application Dashboard - Locations tab.
           */
          locationId={process.env.REACT_APP_SQUARE_LOC_ID}
        >
          <CreditCard />
        </PaymentForm>
      )}
    </div>
  );
};

export default SubscriptionForm;
