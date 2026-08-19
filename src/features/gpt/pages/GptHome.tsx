import GptSearch from './GptSearch'
import GptDetails from './GptDetails'

const GptHome = () => {
  return (
    <div className='bg-gray-950 w-full'>
      <div className='p-5'>
        <GptSearch />
        <GptDetails />
      </div>
    </div>
  )
}

export default GptHome