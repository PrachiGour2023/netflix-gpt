
import { createBrowserRouter } from 'react-router';
import GlobalError from './GlobalError';
import { RootLayout } from './RootLayout';
import TrendingMovieList from '../features/movies/pages/TrendingMovieList';
import TopRatedMovieList from '../features/movies/pages/TopRatedMovieList';
import MovieDetailPage from '../features/movies/pages/MovieDetailPage';
import { lazy } from 'react';
import GptHome from '../features/gpt/pages/GptHome';

const Landing = lazy(() => import("../features/dashboard/pages/LandingPage"));
const Home = lazy(() => import("../features/auth/pages/Home"))

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
                element: <Landing />,
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
            },
            {
                path: "/gpt-search",
                element: <GptHome />
            }
        ],
    },
]);