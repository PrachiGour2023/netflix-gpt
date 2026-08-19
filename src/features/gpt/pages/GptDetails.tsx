import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { HoverMovieCard } from '../../dashboard/components/HoverCard'
import { CardSkeleton } from '../../dashboard/pages/Skeleton'

const GptDetails = () => {

  const { moviesSearch, moviesName } = useSelector((state: RootState) => state.gpt);

  return (
    <div className='bg-gray-950'>
      {
        moviesName.map((movie: string, i: number) => (
          <div key={movie}>
            <div className='text-white flex items-center mt-6'>
              <h3 className='text-white text-xl font-bold my-5'>{movie}</h3>
            </div>
            {moviesSearch?.[i].length > 0 ? <HoverMovieCard data={moviesSearch?.[i]} /> : <CardSkeleton />}
          </div>
        ))
      }

    </div>
  )
}

export default GptDetails