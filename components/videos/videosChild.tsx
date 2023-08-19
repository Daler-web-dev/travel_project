import React, { useState } from "react";
import { GoVideo } from 'react-icons/go';

function VideosChild({item, videoStart}:any) {
   
    const [hover,setHover] = useState(false)
    

  return (
    <div className="w-full h-80 relative z-10 py-10 flex rounded-xl shadow-xl justify-center bg-gray-700 overflow-hidden cursor-pointer">
        <GoVideo className="absolute top-4 right-4 z-30 w-10 h-10"/>
      <div className="w-full h-full -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%]">
        <video
          onMouseEnter={(e: any) => {
            e.target.play();
            videoStart(e.target, item.id);
            setHover(true)
          }}
          id={item.id}
          muted
          src={item.src}
        ></video>
      </div>
      {hover ? (
        <div
          onMouseLeave={(e) => setHover(false)}
          className="w-full h-full absolute top-0 left-0 bg-[#0000006b] flex items-center justify-center"
        >
          <p className="text-center w-[80%] text-base text-white">
            {item.title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default VideosChild;
