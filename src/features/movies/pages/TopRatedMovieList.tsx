import { useEffect, useRef, useState } from 'react'
import { ExpandableCard } from '../component/ExpandableCard';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../redux/store';
import { Loader } from '../../../components/ui/loader';
import { topRatedMovies } from '../../../redux/action/movieAction';

const TopRatedMovieList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [page, setPage] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(false);
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const cards = useSelector((state: RootState) => state.movie.moviesTopRated)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];

            if (target.isIntersecting && !loading) {
                setPage(prev => prev + 1)
            }
        }, {
            threshold: 0,
            rootMargin: '300px'
        })

        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

        return () => observer.disconnect();
    }, [loading])

    useEffect(() => {
        const loadMoreData = async () => {
            setLoading(true)
            try {
                await dispatch(topRatedMovies(page))
            } catch (error) {
                console.log("Failed to load more top rated movies", error);
            } finally {
                setLoading(false)
            }
        }

        loadMoreData();
    }, [page])

    return (
        <div className='bg-gray-950 w-full h-auto p-5'>
            <h2 className='text-white font-mono flex gap-2 text-2xl m-5 font-semibold'>Enjoy Top Rated Movies</h2>
            <ExpandableCard cards={cards} />


            <div ref={loaderRef} className='flex items-center justify-center mt-5'>
                {loading && <Loader />}
            </div>
        </div>
    )
}

export default TopRatedMovieList