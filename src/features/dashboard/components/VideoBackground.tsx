import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieVideo } from '../../../redux/action/movieAction';
import type { AppDispatch, RootState } from '../../../redux/store';

const VideoBackground = ({ movieId }: { movieId: number }) => {

    const dispatch = useDispatch<AppDispatch>();
    const videoData = useSelector((state: RootState) => state.movie.movieVideo)

    console.log("videodata", videoData)

    useEffect(() => {
        dispatch(getMovieVideo(movieId));
    }, [])

    return (
        <div>
            <iframe
                className='w-full h-[450px] aspect-video'
                // src={`https://www.youtube.com/embed/${videoData[0]?.key}`}
                src={`https://www.youtube.com/embed/${videoData?.key}?autoplay=1&mute=0&controls=0&loop=1&playlist=${videoData?.key}&modestbranding=1&rel=0&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground