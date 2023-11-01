

import { useEffect } from 'react';
import '../../assets/App.css';

export const Footer: React.FC  = () => {
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
    <footer className="fixed bottom-0 z-50 w-full text-gray-100 transition-all duration-300 ease-in-out body-font bg-gray-800 py-1">
    <div className="flex flex-row items-center justify-center flex-wrap p-1">
                <a href="https://github.com/HeimanPictures/Deepfake-Audio-Detection">
                  <div className="flex gap-5 items-center justify-self-center">
                  <h2>GitHub</h2>
                  <img className='h-7' src='/github-mark-white.svg' />
                  </div>
                </a>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    </footer>

    </>
  );
}