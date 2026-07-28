import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconBrandMeta, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-950 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold text-red-900 font-serif">Netflix GPT</h1>
                        </div>
                        <div className="flex space-x-9 my-9">
                            <a href="#" className="hover:text-gray-300">About</a>
                            <a href="#" className="hover:text-gray-300">Contact</a>
                            <a href="#" className="hover:text-gray-300">Privacy</a>
                            <a href="#" className="hover:text-gray-300">Blog</a>
                            <a href="#" className="hover:text-gray-300">Term</a>
                            <a href="#" className="hover:text-gray-300">Career</a>
                        </div>
                        <div className="w-full border-t-2 border-dotted border-gray-400"></div>
                        <div className='flex space-x-5 mt-15'>
                            <IconBrandTwitter stroke={2} />
                            <IconBrandLinkedin stroke={2} />
                            <IconBrandGithub stroke={2} />
                            <IconBrandMeta stroke={2} />
                            <IconBrandInstagram stroke={2} />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer