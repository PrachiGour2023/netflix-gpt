
import { createBrowserRouter } from 'react-router';
import LandingPage from '../features/dashboard/pages/LandingPage';
import GlobalError from './GlobalError';
import Home from '../features/auth/pages/Home';
import { RootLayout } from './RootLayout';
import TrendingMovieList from '../features/movies/pages/TrendingMovieList';
import TopRatedMovieList from '../features/movies/pages/TopRatedMovieList';
import MovieDetailPage from '../features/movies/pages/MovieDetailPage';

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
            {
                path: "/trending-movies",
                element: <TrendingMovieList />
            },
            {
                path: "/top-rated-movies",
                element: <TopRatedMovieList />
            },
            {
                path: "/movie-detail/:id",
                element: <MovieDetailPage />
            }
        ],
    },
]);