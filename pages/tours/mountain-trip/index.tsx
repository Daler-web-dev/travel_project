import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Index() {
  return (
	<div>
		<div className="mt-[97px] bg-[#0000006e] px-[20%]  max-sm:-z-10 max-sm:bg-white  max-2xl:px-[10%] max-xl:px-[5%] max-sm:px-0 h-[auto] overflow-hidden relative flex flex-col items-center">
            <video className='absolute top-0 left-0 -z-20 max-2xl:hidden' autoPlay={true} muted={true} src="/mauntain/video.mp4"></video>
			<Image className='hidden max-2xl:block absolute max-sm:hidden -z-10' fill alt='' src={'/mauntain/trees4.jpg'} ></Image>
			<div className='flex items-center flex-col w-auto mt-5 rounded-xl'>
				<h1 className='text-white max-sm:text-black text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-semibold p-2 max-sm:mt-5 rounded-lg'>Services</h1>
		        <p className='text-white max-sm:text-black w-1/2 max-sm:w-10/12 text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-center font-semibold mt-5 p-2 rounded-lg'>Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content.</p>
			</div>
            
		    <div className='flex max-lg:flex-col gap-5 max-lg:gap-20 max-sm:gap-1 mt-16 max-lg:items-center'>

			    <div className='flex flex-col justify-between items-center w-full p-2 max-sm:p-5 relative max-sm:bg-[#0000006e]'>
			        <Image className='hidden max-sm:block absolute top-0 left-0 -z-10' fill alt='' src={'/mauntain/mauntain.jpeg'}></Image>
                    <div className='flex flex-col items-center'>
					    <div className='rounded-full p-16 max-md:p-14 bg-[url("/mauntain/amirsoy.webp")] bg-cover bg-no-repeat bg-center'></div>
		    		    <h2 className='text-white text-xl max-md:text-lg max-sm:text-base text-center font-semibold mt-5 rounded-lg'>Amirsay</h2>
		    		    <p className='text-white text-center max-md:text-sm font-semibold mt-5 rounded-lg'>
		    		    	Amirsoy Mountain Resort is the largest ski resort in Uzbekistan, and the most modern ski resort in Central Asia. It opened in 2019 in the Western Tian Shan, a UNESCO World Heritage Site. The Amirsoy resort covers an area of 900 hectares on the northern slope of Maygashkan Mountain, part of the Chatkal Range in the Western Tian Shan. The elevation of the ski slopes is between 1,630m and 2,275m.
		    		    </p>
					</div>
		    		<button className='mt-5 bg-green-700 text-white w-1/2 rounded-md max-sm:text-sm py-1' title='more info'>More Info</button>
		    	</div>

		    	<div className='flex flex-col justify-between items-center w-full p-2 max-sm:p-5 relative max-sm:bg-[#0000006e]'>
				    <Image className='hidden max-sm:block -z-10' fill alt='' src={'/mauntain/trees4.jpg'} ></Image>
                    <div className='flex flex-col items-center'>
					    <div className='rounded-full p-16 max-md:p-14 bg-[url("/mauntain/chorvoq.webp")] bg-cover bg-no-repeat bg-center'></div>
		    		    <h2 className='text-white text-xl max-md:text-lg max-sm:text-base text-center font-semibold mt-5 rounded-lg'>Chorvoq</h2>
		    		    <p className='text-white text-center font-semibold mt-5 rounded-lg'>
						Chorvoq is an urban-type settlement in Boʻstonliq District, Tashkent Region, Uzbekistan. The town is 575 metres above sea level and lies on the river Chirchiq, downstream from Lake Charvak, an irrigation and hydroelectric facility.
		    		    </p>
					</div>
		    		<button className='mt-5 bg-green-700 text-white rounded-md w-1/2 py-1' title='more info'>More Info</button>
		    	</div>

		    	<div className='flex flex-col justify-between items-center w-full p-2 max-sm:p-5 relative max-sm:bg-[#0000006e]'>
				    <Image className='hidden max-sm:block -z-10' fill alt='' src={'/mauntain/zaamin.jpg'} ></Image>
                    <div className='flex flex-col items-center'>
					    <div className='rounded-full p-16 max-md:p-14 bg-[url("/mauntain/zaamin.webp")] bg-cover bg-no-repeat bg-center'></div>
		    		    <h2 className='text-white text-xl max-md:text-lg max-sm:text-base text-center font-semibold mt-5 rounded-lg'>Zaamin</h2>
		    		    <p className='text-white text-center font-semibold mt-5 rounded-lg'>
						Zaamin State Nature Reserve is located on a vast territory, including Bakhmal forestry, Zaamin forestry, Zaamin Natural Park, with a total area of 26,840 hectares.
		    		    </p>
					</div>
					
					<Link className='w-1/2' href={"/tours/mountain-trip/menu"}>
					    <button className='bg-green-700 text-white rounded-md py-1 mt-5 w-full' title='more info'>More Info</button>
					</Link>
		    	</div>

		    </div>
        </div>
	</div>
  )
}

export default Index
// /public/mauntain-trip/127117 (1440p).mp4