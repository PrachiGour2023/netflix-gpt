
import { createBrowserRouter } from 'react-router';
import Home from '../features/auth/pages/Home';

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])