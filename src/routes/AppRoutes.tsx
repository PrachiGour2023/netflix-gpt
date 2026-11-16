
import { createBrowserRouter } from 'react-router';
import GlobalError from './GlobalError';
import { RootLayout } from './RootLayout';
import { lazy, Suspense } from 'react';

const Landing = lazy(() => import("../features/dashboard/pages/LandingPage"));
const Home = lazy(() => import("../features/auth/pages/Home"))
const TrendingMovieList = lazy(() => import("../features/movies/pages/TrendingMovieList"))
const MovieDetailPage = lazy(() => import("../features/movies/pages/MovieDetailPage"))
const TopRatedMovieList = lazy(() => import("../features/movies/pages/TopRatedMovieList"))
const GptHome = lazy(() => import("../features/gpt/pages/GptHome"))

export const AppRoutes = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <GlobalError />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>...Loading Home</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/landing",
                element: (
                    <Suspense fallback={<div>...Loading Landing Page</div>}>
                        <Landing />
                    </Suspense>
                ),
            },
            {
                path: "/trending-movies",
                element: (
                    <Suspense fallback={<div>...Loading Trending Page</div>}>
                        <TrendingMovieList />
                    </Suspense>
                ),
            },
            {
                path: "/top-rated-movies",
                element: (
                    <Suspense fallback={<div>...Loading Top Rated Movies</div>}>
                        <TopRatedMovieList />
                    </Suspense>
                ),
            },
            {
                path: "/movie-detail/:id",
                element: (
                    <Suspense fallback={<div>...Loading Movies Detail</div>}>
                        <MovieDetailPage />
                    </Suspense>
                ),
            },
            {
                path: "/gpt-search",
                element: (
                    <Suspense fallback={<div>...Loading Gpt</div>}>
                        <GptHome />
                    </Suspense>
                ),
            }
        ],
    },
]);