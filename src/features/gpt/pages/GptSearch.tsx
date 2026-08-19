import { useRef, useState } from 'react'
import { Input } from '../../../components/ui/input'
import { ai } from '../../../utils/googleai'
import { Loader } from '../../../components/ui/loader'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../redux/store'
import { getMovieSearch } from '../../../redux/action/gptAction'
import { movieSearchData } from '../../../redux/slice/gptSlice'

const GptSearch = () => {

    const searchRef = useRef<HTMLInputElement | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    const handleSearchWithAI = async () => {
        setLoading(true)
        try {
            const gptQuery = "Act as movie recommendation system and suggest me some good movies for the query" + searchRef.current?.value + ". Only give me 5 movies name by comma separated like the expample given as Gadar, Don, Golmaal, Koi Mil Gya"
            const interaction = await ai.interactions.create({
                model: "gemini-3.6-flash",
                input: gptQuery,
            });
            const data = interaction.output_text?.split(",");
            const tmdbMovie:any = data?.map(movie => searchMovie(movie));
            const response = await Promise.all(tmdbMovie)
            dispatch(movieSearchData({ moviesData: response, moviesName: data}))
        } catch (error) {
            console.error("Unable to proceed the request", error)
        } finally {
            setLoading(false)
        }
    }

    const searchMovie = (movie: string) => {
        return dispatch(getMovieSearch(movie)).unwrap();
    }

    return (
        <div>
            <h3 className='text-white text-center font-serif text-3xl'>Welcome To GPT</h3>
            <div className='flex w-full justify-center my-10 gap-2'>
                <div className='w-3xl'>
                    <Input ref={searchRef} placeholder='Ask for movie suggetion' type='text' className='' />
                </div>
                <button className='text-white bg-red-900 rounded-md px-5' onClick={handleSearchWithAI}>Search</button>
            </div>
            {loading && <div className='flex justify-center'>
                <Loader />
            </div>}
        </div>
    )
}

export default GptSearch