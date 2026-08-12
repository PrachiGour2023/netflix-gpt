import { Input } from '../../../components/ui/input'

const GptSearch = () => {
    return (
        <div>
            <h3 className='text-white text-center font-serif text-3xl'>Welcome To GPT</h3>
            <div className='flex w-full justify-center my-10 gap-2'>
                <div className='w-3xl'>
                <Input placeholder='Ask for movie suggetion' type='text' className='' />

                </div>
                <button className='text-white bg-red-900 rounded-md px-5'>Search</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default GptSearch