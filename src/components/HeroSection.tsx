import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:mt-20 mt-6 items-center">
        <h1 className='text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide' >
            VirtualLR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imaginations into immersive reality!
        </p>
        
    </div>
  )
}

export default HeroSection