import VideoBackground from '../../dashboard/components/VideoBackground';
import { useLocation, useParams } from 'react-router';

const MovieDetailPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const detailFromState = location?.state?.movieData;

    return (
        <div className='bg-gray-950 w-full h-screen p-5'>
            <VideoBackground movieId={Number(id)} />
            <div className='my-3'>
                <h2 className='text-white font-semibold text-3xl'>{detailFromState?.title}</h2>
                <p className='text-white text-sm my-2'>{detailFromState.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetailPage