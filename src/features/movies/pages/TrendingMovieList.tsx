import { useEffect, useState } from 'react'
import { ExpandableCardDemo } from '../component/ExpandableCard'
import type { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/ui/loader';
import { fetchInTheatreMovies } from '../../../redux/action/movieAction';

const TrendingMovieList = () => {

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.movie.moviesInTheatre);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight

    if (scrollTop + windowHeight >= documentHeight - 100 && !loading) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [loading])

  const fetchMoreData = () => {
    setLoading(true)
    try {
      dispatch(fetchInTheatreMovies(page))
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
      <ExpandableCardDemo cards={cards} />

      <div className='flex items-center justify-center mt-5'>
        {loading && <Loader />}
      </div>
    </div>
  )
}

export default TrendingMovieList