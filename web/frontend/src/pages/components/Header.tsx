

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
        <header className="fixed top-0 z-50 w-full text-gray-100 transition-all duration-300 ease-in-out body-font">
            <div className="container flex flex-row flex-wrap items-center p-5 mx-auto">
                <a className="flex-grow font-semibold text-2x1" href="/">PicDB</a>
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a href="/" className="mr-6 cursor-pointer hover:text-orange-600 ">Home</a>
                    {/* <a href="/contact" className="mr-6 cursor-pointer hover:text-orange-600">Contact</a> */}
                </nav>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        </header>
      </>
  );
}