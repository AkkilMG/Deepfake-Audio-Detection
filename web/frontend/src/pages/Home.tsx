

import React from 'react';
import '../assets/App.css';


export const Home: React.FC  = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-600 bg-no-repeat bg-cover relative items-center">
	  <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
	  <div className="sm:max-w-lg w-full p-10 bg-gray-800 rounded-xl z-10 border border-gray-600">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-100">
          File Upload!
        </h2>
        <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
      </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-300 tracking-wide">Title</label>
                    <input className="text-base text-gray-300 p-2 border border-gray-500 bg-gray-700 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="username@gmail.com" />
            </div>
            <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold text-gray-300 tracking-wide">Attach Document</label>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center border-gray-600">
                        <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                            <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                            {/* <img className="has-mask h-36 object-center" src="../assets/Image/icons8-upload-file-96.png" alt="Upload image" /> */}
                            <img className="has-mask h-32 object-center opacity-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADGElEQVR4nO3dy2pTURjF8TVSB47EQRtHoii+gwpWRTrwMfQRTHwCH8Hrc4jgDX0HRRCcdeQFpELb0V+CR21KTlqSs/f6ztn7B4HS0mZ9e51LThIaqaqqqqqqqqqqqgPATeAp8An4RUKqZhb+AvAu5YIftGAjOF5UN8BV4AeZqT3P82JKaLb87Is/tSATxZQAvMFE7Zn+egGc0MBPuDZqz7XfcPcE4BlGas910DD3hOahpo3ac80zvD0B2MZI7bnaDGtPwEzL5RpOCZhp+VzDKAEzrZar/yVgptVz9bsEzNRNrv6WgJm6y9XPEjBTt7n6VwJm6j5Xv0rATGly9acEzJQuVz9KwExpc8UvATOlzxW7BMyUJ1fcEjBTvlwxS8DvZEuurSJKwO9iS64Hie4v1os6+N1pyXWsKWFr0CXg91IlI4YNlYoYvgCnVSLieA+cUmmI5TNwTSUhplfAXeBS23XCYFA4uVE4uVE4uVE4uZnm3gXGwFpzGzffy67EAvaA23Ny3AJ2cofxrPrs4PbFd5YgtyiL7ypBbpEW31GC3KItfu4S5BZx8XOWILeoi5+rBLklmmsX2Oww42aq64SuMq4yXArjBDknKYJ2nXOZwVJYW3B/m0v+bD1FULnlLIDmeL4gS+t5AxilCCq3FEMBk0XH8UOyzD1/APdTBJVbiqH4syVPmsPGevP1v5PoEbLszvn96d/sXN7VXjx0NupBlmwiDU2gLNlEGppAWbKJNDSBsmQTaWgCZckm0tAEypJNpKEJlCUbx9DAaE6OM44gnlWfHdxhnOvJtsN4Vn12cIe95q0oo+Y2TnWlexj3+tc3ZrlROLlROLlROLl1MMMecG/eQ8uEmTs7cefKvGiYcK//HlVTQvEFrMukeWd18QWMjAWsfPXsyr5/iD4fgia1AP5f1WZc+HoSHgqV/u/rzX6q9A9wMPsYoYAnlOthhAJuUK4NRQC8pjxvFQVwFvhKOb4D5xUJcKUJNnTfgMuKaLpVOD9VL4PpofacogOuA4+nD9N6fp2wDXwAHoU54VZVVVVVVVVVpb77DZw7SXGKt9EJAAAAAElFTkSuQmCC"></img>
                            </div>
                            <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-300 hover:underline">select a file</a> from your computer</p>
                        </div>
                        <input type="file" className="hidden" />
                    </label>
                </div>
            </div>
                    <p className="text-sm text-gray-500">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
            <div>
                <button type="submit" className="my-5 w-full flex justify-center bg-blue-600 text-gray-100 p-4  rounded-full tracking-wide
                            font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-500 shadow-lg cursor-pointer transition ease-in duration-200">
                Upload
            </button>
            </div>
          </form>
      </div>
    </div>
  );
}