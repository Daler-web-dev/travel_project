import Image from 'next/image'
import React from 'react'

function Index() {
  return (
    <div className='mt-24'>
		<div className="py-20 px-[10%] relative overflow-hidden">
            <video className='absolute -top-[24%] left-0 -z-20 w-full max-2xl:hidden' autoPlay={true} muted={true} src="/tadjikistan/tadjikistan.mp4"></video>
			<Image className='hidden max-2xl:block absolute -z-10' fill alt='' src={'/tadjikistan/tadjikistan2.webp'} ></Image>
            
		    <div className='flex max-xl:flex-col gap-20'>
                <div className='w-full h-full rounded-2xl bg-[url("/tadjikistan/1.webp")] bg-no-repeat bg-cover bg-center p-10'>
                    
                </div>
                <div className='w-full h-full rounded-2xl bg-[url("/tadjikistan/2.webp")] bg-no-repeat bg-cover bg-center p-10'>
                    
                </div>
                <div className='w-full h-full rounded-2xl bg-[url("/tadjikistan/3.webp")] bg-no-repeat bg-cover bg-center p-10'>
                    
                </div>
		    </div>
        </div>
	</div>
  )
}

export default Index