import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react'
import { useState } from "react";
import { navItems } from '../constants/index.jsx'


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }


    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex flex-shrink-0 items-center">
                        <img src={logo} alt="logo" className="size-10" />
                        <span className="text-xl tracking-tight">VirtualLR</span>

                    </div>
                    <ul className="hidden lg:flex space-x-12 ml-14">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex space-x-12 justify-center items-center">
                        <a href="#" className="py-2 px-3 rounded-lg border">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-lg border bg-gradient-to-r from-orange-500 to-orange-800">
                            Create Account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {!mobileDrawerOpen ? <Menu /> : <X />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 flex items-center justify-center w-full lg:hidden flex-col p-12 z-20 bg-neutral-900">
                        <ul>
                            {navItems.map((item,index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 rounded-lg border">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-lg border bg-gradient-to-r from-orange-500 to-orange-800">
                            Create Account
                        </a>
                    </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar