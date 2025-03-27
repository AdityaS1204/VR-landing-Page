import codeImg from "../assets/code.jpg"
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants/index.jsx'

interface checklistItem {
    title: string;
    description: string;
}

const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">Accelerate your <span className="bg-gradient-to-r from-orange-600 to-red-700 text-transparent bg-clip-text"> coding workflow.</span></h2>
            <div className="flex justify-center flex-col lg:flex-row">
                <div className="p-12 w-full lg:w-1/2">
                    <img src={codeImg} alt="code Image" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((checklistItem: checklistItem, index: number) => (
                        <div key={index} className="flex mb-12">
                            <div className="justify-center items-center bg-neutral-900 text-green-400 mx-6 p-2 h-10 w-10 rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl font-bold">{checklistItem.title}</h5>
                                <p className="text-neutral-500 text-md">{checklistItem.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow