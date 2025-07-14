import React, { lazy, Suspense } from 'react';

const LazyCatgeorySlide = lazy(() => import('./CatgeorySlide'));

const CatgeorySlide = props => (
  <Suspense fallback={null}>
    <LazyCatgeorySlide {...props} />
  </Suspense>
);

export default CatgeorySlide;
