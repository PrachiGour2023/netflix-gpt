import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout/pages/Header';
import { useEffect } from 'react';
import { fetchMovies } from '../../../redux/action/movieAction';
import type { AppDispatch, RootState } from '../../../redux/store';
import { HoverMovieCard } from '../components/HoverCard';

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const movieData = useSelector((state: RootState) => state.movie);

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (
        <div className='bg-gray-950 w-full h-auto p-5'>
            <Header />
            <div>
                <h3 className='text-white text-xl font-bold p-8'>Movies</h3>
                <HoverMovieCard data={movieData.movies} />
            </div>
        </div>
    )
}

export default LandingPage