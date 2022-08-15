import React from 'react';

const AppInfo = () => {
  return (
    <div>
      <h1>Square payment gateway prototype</h1>
      <i>
        Please{' '}
        <a href="https://developer.squareup.com/docs/devtools/sandbox/payments">
          click here
        </a>{' '}
        for test cards
      </i>
      <br />
      <br />
      <p>
        Example: Card#: 4111 1111 1111 1111 , Expiry: any future date, CVV: 111,
        Zip: 11111
      </p>
    </div>
  );
};

export default AppInfo;
