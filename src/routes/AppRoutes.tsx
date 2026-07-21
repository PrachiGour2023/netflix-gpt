
import { createBrowserRouter } from 'react-router';
import LandingPage from '../features/dashboard/pages/LandingPage';
import GlobalError from './GlobalError';
import Home from '../features/auth/pages/Home';
import { RootLayout } from './RootLayout';

export const AppRoutes = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <GlobalError />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/landing",
                element: <LandingPage />,
            },
        ],
    },
]);