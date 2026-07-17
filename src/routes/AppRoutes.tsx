
import { createBrowserRouter } from 'react-router';
import Home from '../features/auth/pages/Home';
import LandingPage from '../features/dashboard/pages/LandingPage';

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/landing',
        element: <LandingPage />
    }
])