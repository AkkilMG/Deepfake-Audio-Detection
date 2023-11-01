

// import { useEffect } from 'react';
import '../../assets/App.css';

export const Header: React.FC  = () => {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             document.querySelector("header")?.classList.add("backdrop-blur-sm");
    //         } else {
    //             document.querySelector("header")?.classList.remove("backdrop-blur-sm");
    //         }
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [])
    return (
      <>
        <header className="fixed top-0 z-50 w-full py-1 text-gray-100 transition-all duration-300 ease-in-out bg-gray-800 body-font bg-opacity-60">
            <div className="flex flex-row flex-wrap items-center justify-between p-5 ml-20">
                <a className="flex-row font-semibold text-2x1" href="/">Detection Of Synthetic Voice Manipulation</a>
                <nav className="flex flex-wrap items-center justify-center text-base">
                    <a href="https://github.com/HeimanPictures/Deepfake-Audio-Detection">
                        <div className="flex items-center gap-5 justify-self-center">
                            <h2>GitHub</h2>
                            <img className='h-7' src='/github-mark-white.svg' alt='GitHub' />
                        </div>
                    </a>
                    {/* <a href="/contact" className="mr-6 cursor-pointer hover:text-orange-600">Contact</a> */}
                    {/* <a className="mr-6 cursor-pointer hover:text-orange-600" href=''>About</a> */}
                </nav>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        </header>
      </>
  );
}