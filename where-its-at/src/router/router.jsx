import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Events from '../pages/Events/Events';
import Buy from '../pages/Buy/Buy';
import Confirmation from '../pages/Confirmation/Confirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Events />,
  },
  {
    path: '/event',
    element: <Buy />,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
