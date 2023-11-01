

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
    <footer className="fixed bottom-0 z-50 w-full py-1 text-gray-100 transition-all duration-300 ease-in-out body-font">
      <div className="flex flex-row flex-wrap items-center justify-center p-1">
        Made with ❤️ by Nobody
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    </footer>
  );
}