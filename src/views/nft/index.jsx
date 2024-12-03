import React from 'react'
import BGNFT from '../../assets/image/bgNFT.png'
import Infomation from './components/infomation'
import Artist from './components/artist'

export default function Nft() {
  return (
    <body className='flex flex-col'>
      <img src={BGNFT} alt="backgroundNFT" className='w-full h-[560px] max-md:h-[420px] max-sm:h-[320px] object-cover' />
      <Infomation/>
      <Artist/>
    </body>
  )
}
