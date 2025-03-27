import { testimonials } from '../constants/index.tsx'

interface testimonial {
    user: string;
    company: string;
    image: string;
    text: string;
}

const Testimonial = () => {
    return (
        <div className='mt-20 tracking-wide'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20 text-center'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial: testimonial, index: number) => (
                    <div key={index} className='lg:w-1/3 sm:w-1/2 w-full px-4 py-2'>
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flexmt-8 items-center">
                                <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 mr-6 rounded-full border border-neutral-300' />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className='text-sm italic text-neutral-600 font-normal'>{testimonial.company}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial