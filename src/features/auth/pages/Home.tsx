import { lazy, useState } from 'react'
import { bg_img } from '../../../utils/constant'

const Signup = lazy(() => import('./SignupPage'))
const Login = lazy(() => import('./LoginPage'))


const Home = () => {

    const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

    const handleFormStatus = () => {
        setIsLoginForm(prev => !prev)
    }

    return (
        <div className='relative'>
            <img fetchPriority='high' loading='eager' decoding='sync' src={bg_img} alt='netflix_bg_image' className='h-screen w-full' />
            <div className='absolute inset-0 flex items-center justify-center'>
                {
                    isLoginForm ?
                        (<Login handleFormStatus={handleFormStatus} />) :
                        (<Signup isLoginForm={isLoginForm} handleFormStatus={handleFormStatus} />)
                }
            </div>
        </div>
    )
}

export default Home