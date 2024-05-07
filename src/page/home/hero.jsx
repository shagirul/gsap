import React from 'react'
import Staggertext from '../../component/staggerText'

export default function Hero(){
    return<section className=' font-akshar  hero-section h-screen w-screen grow flex justify-center items-center text-white'>
        <div className='flex flex-col text-6xl md:text-[150px] tracking-[-0.05em] leading-[50px] md:leading-[120px] justify-center items-center '>
            <h1 className='text-[#cecfcf]' >UNFOLDING</h1>
            {/* <Staggertext/> */}
            <h1 className='text-[#be1011]'>GEOPOLITIKA</h1>
            <p className='font-sans font-extralight text-[10px] md:text-lg leading-[10px] tracking-[0.15em] md:tracking-[0.40em] text-center'>Navigating the Changing Geopolitical Landscape</p>
        </div>
    </section>
}