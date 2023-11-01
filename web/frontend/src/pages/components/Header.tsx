

import { useEffect } from 'react';
import '../../assets/App.css';

export const Header: React.FC  = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector("header")?.classList.add("backdrop-blur-sm");
            } else {
                document.querySelector("header")?.classList.remove("backdrop-blur-sm");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
      <>
        <header className="fixed top-0 z-50 w-full text-gray-100 transition-all duration-300 ease-in-out body-font bg-gray-800 py-2">
            <div className="flex flex-row justify-between flex-wrap items-center p-5 ml-20">
                <a className="flex-row font-semibold text-2x1" href="/">PicDB</a>
                <div className="ml-20 font-bold text-4xl hover:text-gray-300 duration-200">Detection Of Synthetic Voice Manipulation</div>
                <nav className="flex flex-wrap items-center justify-center text-base">
                    <a href="/" className="mr-6 cursor-pointer hover:text-orange-600 ">Home</a>
                    <a href="/contact" className="mr-6 cursor-pointer hover:text-orange-600">Contact</a>
                    <a className="mr-6 cursor-pointer hover:text-orange-600">About</a>
                </nav>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        </header>
      </>
  );
}