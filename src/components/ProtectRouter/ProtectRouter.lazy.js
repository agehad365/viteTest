import React, { lazy, Suspense } from 'react';

const LazyProtectRouter = lazy(() => import('./ProtectRouter'));

const ProtectRouter = props => (
  <Suspense fallback={null}>
    <LazyProtectRouter {...props} />
  </Suspense>
);

export default ProtectRouter;
