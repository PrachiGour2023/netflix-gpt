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

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const movieData = useSelector((state: RootState) => state.movie);

    useEffect(() => {
        dispatch(fetchInTheatreMovies());
        dispatch(topRatedMovies());
        dispatch(movieGenresList());
        dispatch(getIndianMovies());
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
                    <span className='text-white text-lg ml-3 font-semibold'>See more</span>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                <HoverMovieCard data={movieData.moviesInTheatre} />
            </div>
            <div>
                <div className='text-white flex items-center mt-6'>
                    <h3 className='text-white text-xl font-bold my-5'>Top Rated Movies</h3>
                    <span className='text-white text-lg ml-3 font-semibold'>See more</span>
                    <IconChevronRight stroke={2} size={25} />
                </div>
                <HoverMovieCard data={movieData.moviesTopRated} />
            </div>
            <div>
                <TabsDemo />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage