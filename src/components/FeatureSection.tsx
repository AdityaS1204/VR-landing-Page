import { features } from '../constants/index.tsx'
import { } from 'lucide-react'

interface feature {
    icon: React.ReactNode;
    text: string;
    description: string;
}

const FeatureSection = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium uppercase px-2 py-1">Feature</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build your <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text ">code</span></h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature: feature, index: number) => (
                    <div key={index} className='w-full lg:w-1/3 sm:1/2'>

                        <div className='flex'>
                            <div className="h-10 w-10 mx-6 flex items-center justify-center rounded-full bg-neutral-900 text-orange-700 p-2">
                                {feature.icon}
                            </div>
                            <div className='w-2/3'>
                                <h2 className='font-bold mb-6 mt-1 text-xl'>{feature.text}</h2>
                                <p className='text-md p-2 mb-20 text-neutral-400 '>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection