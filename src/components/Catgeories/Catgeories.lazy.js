import React, { lazy, Suspense } from 'react';

const LazyCatgeories = lazy(() => import('./Catgeories'));

const Catgeories = props => (
  <Suspense fallback={null}>
    <LazyCatgeories {...props} />
  </Suspense>
);

export default Catgeories;
