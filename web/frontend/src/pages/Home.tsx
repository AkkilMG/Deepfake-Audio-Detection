

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Marquee from "react-fast-marquee";

import '../assets/App.css';


export const Home: React.FC  = () => {
  const [image, setImage] = useState();
  const [predict, setPredict] = useState('fake');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      alert('Please select an audio before uploading.');
      return;
    }
    if (file.size / (1024 * 1024) > 50) {
      alert('Please select an audio under 50mb. As its a limit.');
      return;
    }
    if (!file.type.startsWith('audio/')) {
      alert('Please select an audio.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: any) => {
          setProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      };
      axios
        .post('http://localhost:8000/api/v1/convert', formData, config)
        .then((response: any) => {
          if (response.data['success'] === true) {
            setPredict(response.data['predict']);
            setImage(response.data['image']);
          } else {
            setError(response.data['message']);
            setProgress(0);
            alert('File uploaded not successful.');
          }
        })
        .catch((err: any) => {
          alert(`Error uploading file: ${err}`);
        });
    } catch (err: any) {
      alert(`Error uploading file: ${err}`);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 bg-no-repeat bg-cover py-15 sm:px-6 lg:px-8">
	    <div className="z-10 w-full p-10 mt-12 bg-gray-800 border border-gray-600 bg-opacity-90 sm:max-w-lg rounded-xl">
    { image ? (
        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-1 space-y-2">
            <label className="relative flex items-center justify-center text-3xl font-bold tracking-wide text-white">Detection</label>
            <div className="relative flex items-center justify-center w-full">
              {/* <img className="object-center h-32 has-mask opacity-20" src={image} alt='Audio Image' /> */}
              <img src={image} width='512px' alt="Audio Image" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                { (predict==="real") ? (
                  <img src="/checkmark.svg" alt="Prediction" width="124px" className="w-1/2 h-auto" />
                ): (
                  <img src="/crossmark.svg" alt="Prediction" width="124px" className="w-1/2 h-auto" />
                ) }
                </div>
              </div>
              <div className='relative flex items-center justify-center '>
                  <span className="items-center text-2xl font-bold tracking-wide text-gray-300">The given audio is { (predict==="real")? 'Real': 'Fake' }.</span>
                  <br />
              </div>
              <Marquee className="text-red-500">
              Note: The accuracy of the application is nearly 89% not 100%. There is possible wrong outcome. If that happens sorry for the inconvience.
              </Marquee>
          </div>
        </div>
    ) : (
        <>
          <div className="text-center">
            <h2 className="mt-5 text-4xl font-bold text-gray-100">
              Deepfake Detection
            </h2>
            <p className="mt-2 text-sm text-gray-400">Upload the audio file.</p>
        </div>
        <form className="mt-8 space-y-3">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold tracking-wide text-gray-300">Attach Document</label>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full p-10 text-center border-4 border-gray-600 border-dashed rounded-lg h-60 group">
                        <div className="flex flex-col items-center justify-center w-full h-full text-center ">
                            <div className="flex flex-auto w-2/5 mx-auto -mt-10 max-h-48">
                              <img className="object-center h-32 has-mask opacity-20" src="/icons8-upload-file-96.png" alt='upload'></img>
                            </div>
                            <p className="text-gray-500 pointer-none "><span className="text-sm">Drag and drop</span> files here <br /> or <a className="text-blue-300 hover:underline ">select a file</a> from your computer</p>
                        </div>
                        <input type="file" className="hidden" accept="audio/*" onChange={handleChange} required />
                    </label>
                </div>
            </div>
              <p className="text-sm text-gray-500">
                <span>File type: wav, types of audio</span>
              </p>
              <Marquee className="text-red-500">
                Note: The model is trained on set of data available on internet, the application can be slow. The accuracy of the application is nearly 89% not 100%.
              </Marquee>
            {progress ?(
              <div className="w-full">
                <div className="bg-gray-600 rounded-lg">
                  <div className="flex items-center bg-white rounded-lg" style={{ width: `${progress}%` }}>
                    <span className="mx-auto text-gray-500">{progress === 100 ? `Checking the audio...`: `${progress}%`}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
        </form>
      </> 
      )}
      </div>
    </div>
  );
}