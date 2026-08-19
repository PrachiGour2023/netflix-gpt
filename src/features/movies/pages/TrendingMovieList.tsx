import { useEffect, useState, useRef } from 'react'
import { ExpandableCard } from '../component/ExpandableCard'
import type { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/ui/loader';
import { fetchInTheatreMovies } from '../../../redux/action/movieAction';
import { IconMoodSmileBeam } from '@tabler/icons-react';

const TrendingMovieList = () => {

  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const isFetching = useRef<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.movie.moviesInTheatre);
  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0]

      if (target.isIntersecting && !loading && !isFetching.current) {
        setPage(prev => prev + 1)
      }

    }, {
      threshold: 0,
      rootMargin: "100px"
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect();

  }, [loading])

  const fetchMoreData = async () => {
    setLoading(true)
    try {
      isFetching.current = true;
      await dispatch(fetchInTheatreMovies(page))
      isFetching.current = false;
    } catch (error) {
      console.log("Failed to dispatch the action")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMoreData();
  }, [page])

  return (
    <div className='bg-gray-950 w-full h-auto p-5'>
      <h2 className='text-white font-mono flex gap-2 text-2xl m-5 font-semibold'>Enjoy Trending Movies <IconMoodSmileBeam size={30} stroke={2} /></h2>
      <ExpandableCard cards={cards} />

      <div ref={loaderRef} className='flex items-center justify-center mt-5'>
        {loading && <Loader />}
      </div>
    </div>
  )
}

export default TrendingMovieList