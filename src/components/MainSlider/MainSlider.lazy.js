import React, { lazy, Suspense } from 'react';

const LazyMainSlider = lazy(() => import('./MainSlider'));

const MainSlider = props => (
  <Suspense fallback={null}>
    <LazyMainSlider {...props} />
  </Suspense>
);

export default MainSlider;
