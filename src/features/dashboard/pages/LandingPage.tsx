import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout/pages/Header';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { fetchInTheatreMovies, getIndianMovies, movieGenresList, topRatedMovies } from '../../../redux/action/movieAction';
import type { AppDispatch, RootState } from '../../../redux/store';
import { HoverMovieCard } from '../components/HoverCard';
import { CarouselDemo } from '../components/Carousel';
import { IconChevronRight } from '@tabler/icons-react';
import { getTodayAiredTVList } from '../../../redux/action/tvAction';
import { Link } from 'react-router';
import { CarouselSkeleton, CardSkeleton } from './Skeleton';

const TabsDemo = lazy(() => import('../components/Tabs').then((m) => ({ default: m.TabsDemo })))
const Footer = lazy(() => import('../../layout/pages/Footer'));

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const belowFoldRef = useRef<HTMLDivElement | null>(null)
    const [loadBelowFold, setLoadBelowFold] = useState<boolean>(false)

    const indianMovies = useSelector((state: RootState) => state.movie?.indianMovies);
    const moviesInTheatre = useSelector((state: RootState) => state.movie?.moviesInTheatre);
    const moviesTopRated = useSelector((state: RootState) => state.movie?.moviesTopRated);
    const movieGenreList = useSelector((state: RootState) => state.movie?.movieGenreList);
    const currentAirList = useSelector((state: RootState) => state.tv?.currentAirList);

    useEffect(() => {
        if (!indianMovies?.length) dispatch(getIndianMovies())
        if (!moviesInTheatre?.length) dispatch(fetchInTheatreMovies(1));
    }, [dispatch, indianMovies?.length, moviesInTheatre?.length])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadBelowFold(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px'
            }
        )

        if (belowFoldRef.current) observer.observe(belowFoldRef.current);
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!loadBelowFold) return;
        if (!moviesTopRated?.length) dispatch(topRatedMovies(1));
        if (!movieGenreList?.length) dispatch(movieGenresList());
        if (!currentAirList?.length) dispatch(getTodayAiredTVList());
    }, [loadBelowFold, dispatch]);

    return (
        <div className='bg-gray-950 w-full h-auto p-5'>
            <Header />
            <div>
                {indianMovies?.length > 0 ? <CarouselDemo /> : <CarouselSkeleton />}
            </div>

            {/* Above the fold */}
            <div>
                <div className='text-white flex items-center mt-6'>
                    <h3 className='text-white text-xl font-bold my-5'>New in Theatres</h3>
                    <Link to={"/trending-movies"} className='text-white text-lg ml-3 font-semibold'>See more</Link>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                {moviesInTheatre?.length > 0 ? <HoverMovieCard data={moviesInTheatre} /> : <CardSkeleton />}
            </div>

            {/* Below the fold content */}
            <div ref={belowFoldRef}>
                <div>
                    <div className='text-white flex items-center mt-6'>
                        <h3 className='text-white text-xl font-bold my-5'>Top Rated Movies</h3>
                        <Link to={"/top-rated-movies"} className='text-white text-lg ml-3 font-semibold'>See more</Link>
                        <IconChevronRight stroke={2} size={25} />
                    </div>
                    {moviesTopRated?.length > 0 ? <HoverMovieCard data={moviesTopRated} /> : <CardSkeleton />}
                </div>
                <Suspense fallback={null}>
                    <div>
                        {movieGenreList?.length > 0 && <TabsDemo />}
                    </div>
                    <div>
                        <div className='text-white flex items-center'>
                            <h3 className='text-white text-xl font-bold my-5'>Today's Aired Shows</h3>
                            <span className='text-white text-lg ml-3 font-semibold'>See more</span>
                            <IconChevronRight stroke={2} size={25} />
                        </div>
                        {currentAirList?.length > 0 ? <HoverMovieCard data={currentAirList} /> : <CardSkeleton />}
                    </div>
                    <Footer />
                </Suspense>
            </div>
        </div>
    )
}

export default LandingPage