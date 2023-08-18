import Image from 'next/image'
import React from 'react'

function Menu() {
  return (
    <div className='mt-24'>
        <div className='pt-7 w-2/3 max-xl:w-4/5 max-lg:w-11/12 max-md:w-full m-auto'>
            <div className='bg-gray-200 rounded-md p-5 max-md:p-4 max-sm:p-2 w-full max-md:w-[90%] max-md:m-auto'>
                <p className='font-medium text-lg max-md:text-base max-sm:text-sm text-center'>Мы еще не принимаем онлайн-заказы. Чтобы завершить оформление заказа, свяжитесь с нами.</p>
            </div>
            <div className='max-md:px-[5%]'>
                <h1 className='mt-10 max-md:mt-7 max-sm:mt-3 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-semibold'>Lunch Menu</h1>
                <p className='mt-4 max-sm:mt-2 font-semibold'>Served daily between 12-5pm</p>
            </div>

            <div className='h-60 max-md:h-52 max-sm:h-40 mt-10 max-md:mt-7 max-sm:mt-3 bg-[url("/mauntain/sushi.jpg")] bg-no-repeat bg-center bg-cover'></div>

            <div className='max-md:px-[5%]'>
                <h2 className='text-2xl max-md:text-xl max-sm:text-lg mt-5 font-medium'>STARTERS</h2>
                <p className='mt-2 text-lg max-md:text-base max-sm:text-sm'>This is a section of your menu, customize it any way you want.</p>
            </div>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10 mb-10 max-md:gap-0'>
                {
                    [1,2,3,4,5].map(item =>
                        <div key={item} className='flex justify-between max-md:p-5 max-md:items-center border gap-5 shadow-md max-md:border-x-0 max-md:shadow-none'>
                            <div className='w-[65%] max-sm:w-[50%] h-40 flex flex-col justify-center m-5 max-md:m-0 mr-0 gap-5 text-lg '>
                                <h3 className='max-sm:text-sm'>This Is Your First Item</h3>
                                <p className='max-sm:text-sm'>Our famous French baguette, with olive oil balsamic vinegar</p>
                                <div className='px-2 py-1 text-white rounded-xl bg-green-600 w-fit text-sm max-sm:text-xs flex items-center gap-2'>
                                    <img src="/mauntain/star_white_icon.png" className='w-5 h-5 max-sm:h-3 max-sm:w-3' alt="" /> 
                                    Специальное блюдо
                                </div>
                            </div>
                            <div className='w-[35%] h-full max-md:w-32 max-md:h-32 max-sm:w-28 max-sm:h-28 bg-[url("/mauntain/firstItem.jpg")] bg-cover max-md:bg-contain bg-no-repeat'></div>
                        </div>
                    )
                }
            </div>

            <div className='h-60 max-md:h-52 max-sm:h-40 mt-10 bg-[url("/mauntain/sushi2.jpg")] bg-no-repeat bg-center bg-cover'></div>

            <div className='max-md:px-[5%]'>
                <h2 className='text-2xl max-md:text-xl max-sm:text-lg mt-5 font-medium'>MAINS</h2>
                <p className='mt-2 text-lg max-md:text-base max-sm:text-sm'>Tell people more about the items in this section, e.g., all main courses can be made gluten free</p>
            </div>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-0 mt-10 mb-10'>
                {
                    [1,2,3].map(item =>
                        <div key={item} className='flex justify-between max-md:p-5 max-md:items-center border gap-5np shadow-md max-md:border-x-0 max-md:shadow-none'>
                            <div className='w-[65%] max-sm:w-[50%] h-40 flex flex-col justify-center m-5 max-md:m-0 mr-0 gap-5 text-lg '>
                                <h3 className='max-sm:text-sm'>This Is Your First Item</h3>
                                <p className='max-sm:text-sm'>Our famous French baguette, with olive oil balsamic vinegar</p>
                                <div className='px-2 py-1 text-white rounded-xl bg-green-600 w-fit text-sm max-sm:text-xs flex items-center gap-2'>
                                    <img src="/mauntain/star_white_icon.png" className='w-5 h-5 max-sm:h-3 max-sm:w-3' alt="" /> 
                                    Специальное блюдо
                                </div>
                            </div>
                            <div className='w-[35%] h-full max-md:w-32 max-md:h-32 max-sm:w-28 max-sm:h-28 bg-[url("/mauntain/firstItem.jpg")] bg-cover max-md:bg-contain bg-no-repeat'></div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Menu