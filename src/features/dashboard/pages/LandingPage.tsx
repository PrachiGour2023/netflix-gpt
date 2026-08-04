import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout/pages/Header';
import { useEffect } from 'react';
import { fetchInTheatreMovies, getIndianMovies, movieGenresList, topRatedMovies } from '../../../redux/action/movieAction';
import type { AppDispatch, RootState } from '../../../redux/store';
import { HoverMovieCard } from '../components/HoverCard';
import { TabsDemo } from '../components/Tabs';
import { CarouselDemo } from '../components/Carousel';
import { IconChevronRight } from '@tabler/icons-react';
import Footer from '../../layout/pages/Footer';
import { getTodayAiredTVList } from '../../../redux/action/tvAction';
import { Link } from 'react-router';

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const movieData = useSelector((state: RootState) => state.movie);
    const tvData = useSelector((state: RootState) => state.tv);

    useEffect(() => {
        dispatch(fetchInTheatreMovies(1));
        dispatch(topRatedMovies(1));
        dispatch(movieGenresList());
        dispatch(getIndianMovies());
        dispatch(getTodayAiredTVList());
    }, []);

    return (
        <div className='bg-gray-950 w-full h-auto p-5'>
            <Header />
            <div>
                <CarouselDemo />
            </div>
            <div>
                <div className='text-white flex items-center mt-6'>
                    <h3 className='text-white text-xl font-bold my-5'>New in Theatres</h3>
                    <Link to={"/trending-movies"} className='text-white text-lg ml-3 font-semibold'>See more</Link>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                <HoverMovieCard data={movieData.moviesInTheatre} />
            </div>
            <div>
                <div className='text-white flex items-center mt-6'>
                    <h3 className='text-white text-xl font-bold my-5'>Top Rated Movies</h3>
                    <Link to={"/trending-movies"} className='text-white text-lg ml-3 font-semibold'>See more</Link>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                <HoverMovieCard data={movieData.moviesTopRated} />
            </div>
            <div>
                <TabsDemo />
            </div>
            <div>
                <div className='text-white flex items-center'>
                    <h3 className='text-white text-xl font-bold my-5'>Today's Aired Shows</h3>
                    <span className='text-white text-lg ml-3 font-semibold'>See more</span>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                <HoverMovieCard data={tvData.currentAirList} />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage