import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'


const HeroSection = () => {
    return (
        <div className="flex flex-col lg:mt-20 mt-6 items-center">
            <h1 className='text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide' >
                VirtualLR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for developers</span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imaginations into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    muted
                    loop
                    className='w-1/3 border-orange-700 mx-2 my-4 rounded-lg shadow-orange-400 border'
                >
                    <source src={video1} type='video/mp4' />
                    Your browser does not support video tag
                </video>
                <video
                    autoPlay
                    muted
                    loop
                    className='border-orange-700 mx-2 my-4 rounded-lg shadow-orange-400 border w-1/3 '
                >
                    <source src={video2} type='video/mp4' />
                    Your browser does not support video tag
                </video>
            </div>
        </div>
    )
}

export default HeroSection