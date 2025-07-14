import React, { lazy, Suspense } from 'react';

const LazyProductdatil = lazy(() => import('./Productdatil'));

const Productdatil = props => (
  <Suspense fallback={null}>
    <LazyProductdatil {...props} />
  </Suspense>
);

export default Productdatil;
