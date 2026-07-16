import { useState } from 'react'
import { bg_img } from '../../../utils/constant'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'


const Home = () => {

    const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

    const handleFormStatus = () => {
        setIsLoginForm(prev => !prev)
    }


    return (
        <div className='relative'>
            <img src={bg_img} alt='netflix_bg_image' className='h-screen w-full' />
            <div className='absolute inset-0 flex items-center justify-center'>
                {
                    isLoginForm ?
                        (<LoginPage handleFormStatus={handleFormStatus} />) :
                        (<SignupPage isLoginForm={isLoginForm} handleFormStatus={handleFormStatus} />)
                }
            </div>
        </div>
    )
}

export default Home