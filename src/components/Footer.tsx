import { resourcesLinks, communityLinks, platformLinks } from '../constants/index.jsx'



const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Resources
                    </h3>
                    <ul>
                        {resourcesLinks.map((link, index) => (
                            <li key={index}><a href={link.href} className='text-neutral-500 hover:text-white'>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Platforms
                    </h3>
                    <ul>
                        {platformLinks.map((link, index) => (
                            <li key={index}><a href={link.href} className='text-neutral-500 hover:text-white'>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Communities
                    </h3>
                    <ul>
                        {communityLinks.map((link, index) => (
                            <li key={index}><a href={link.href} className='text-neutral-500 hover:text-white'>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer