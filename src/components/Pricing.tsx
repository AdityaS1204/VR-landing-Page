import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants/index.tsx'

interface Option {
    title: string;
    price: string;
    features: string[];
}


const Pricing = () => {
    return (
        <div className='mt-20 '>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 text-center tracking-wider">Pricing</h2>
            <div className="flex flex-wrap flex-col sm:flex-row ">
                {pricingOptions.map((option: Option, index: number) => (
                    <div className='w-full sm:w1/2  lg:w-1/3 p-2 py-2 px-4 flex flex-col rounded-lg' key={index}>
                        <div className='p-10 border border-neutral-700 rounded-xl'>
                            <p className='text-4xl mb-8'>{option.title}
                                {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-500 to-red-400 text-xl mb-4 ml-2 text-transparent bg-clip-text'>(Most Popular)</span>}</p>

                            <p className=''>
                                <span className='mt-6 mr-2 text-xl '>{option.price}</span>
                                <span className='tracking-tight text-neutral-400'>/Month</span>
                                </p>
                                <ul>
                                    {option.features.map((feature:string,index:number)=>(
                                        <li key={index} className='flex items-center mt-6 gap-2'>
                                            <CheckCircle2/>
                                            <span className=''>{feature}</span>
                                            </li>
                                    ))}
                                </ul>
<a href="#" className='inline-flex justify-center items-center text-center w-full *:h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-400 to-red-400 border border-orange-900 rounded-lg transition duration-200'>Subscribe</a>
                            {/* <p> {option.features}</p> */}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing