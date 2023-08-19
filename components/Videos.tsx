import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoVideo } from "react-icons/go";
import VideosChild from "./videos/videosChild";

interface VideosProps {}

const videos = [
	{
		id:1,
		src:"/images/video.mp4",
		title: "Haifa City #telaviv #haifa #israel #samarkand #uzbekistan🇺🇿 #tashkentcity #uzbeks #top #usa #ramatgan #tajikistan #reels #video #photography #videoedits #masters"
	},
	{
		id:2,
		src:"/images/video2.mp4",
		title:"#telaviv #jaffa #israel #travel #beach #sea #vibe #italiano #uzbekistan #tajikistan #top #recommendation #russia #youngs #uzbeks #usa #samarkand #mexico #spain #turkey #samarkand #tajiks #musi"
	},
	{
		id:3,
		src:"/images/video.mp4",
		title:"#telaviv #travelphotography #travel #sea #uzbeks #world #uzbekistan #tajikistan #life #motivation"
	}
]

const Videos: React.FC<VideosProps> = () => {
    const [videoId,setVideoId] = useState<number>()
    const [secentVideo,setSecentVideo] = useState<any>()

    const [hover,setHover] = useState(false)

	function videoStart(target:any, id:number) {
		setVideoId(id)
		setSecentVideo(target)
		if(videoId !== id && secentVideo !== undefined){
			secentVideo.pause()
		}
	}
	
  return (
    <div className="bg-white">
      <div className="flex max-md:flex-col justify-center items-end max-md:items-center gap-10 py-20 pb-16">
        <div className="w-32 h-32">
          <Image
            src={"/images/instagram.webp"}
            width={1000}
            height={1000}
            alt="instagram"
          />
        </div>
        <div className="">
          <h2 className="text-4xl max-md:text-3xl">Follow Us on Instagram</h2>
          <Link href={"#"} className="underline text-4xl max-md:text-3xl">
            Central_asiatravelagency
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-md:gap-5 px-20 max-lg:px-5">
	  <div className="w-full h-80 relative z-10 py-10 flex rounded-xl shadow-xl justify-center bg-gray-700 overflow-hidden cursor-pointer">
        <GoVideo className="absolute top-4 right-4 z-30 w-10 h-10"/>
      <div onMouseEnter={e=> setHover(true)} className="w-full h-full -z-10 absolute top-0 left-0">
        <Image src={"/images/firstFotoInIndex.jpg"} fill alt="" className="w-full h-full"/>
      </div>
      {hover ? (
        <div
          onMouseLeave={(e) => setHover(false)}
          className="w-full h-full absolute top-0 left-0 bg-[#0000006b] flex items-center justify-center"
        >
          <p className="text-center w-[80%] text-base text-white">
		    🌳Haifa🌳#haifa #haifapic #telaviv #jerusalem #israel #palestine #usa #russia #europe #uzbekistan🇺🇿 #samarkand🇺🇿 #vibe #photos #photography #uzbekstars🇺🇿 #moscow #germany #top
          </p>
        </div>
      ) : null}
    </div>
		{
			videos.map((item:any)=>(
				<VideosChild key={item.id} item={item} videoStart={videoStart}/>
			))
		}
        

      </div>
    </div>
  );
};

export default Videos;
