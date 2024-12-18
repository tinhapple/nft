import React from 'react'
import { TbBrandDiscord } from "react-icons/tb";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import Button from '../../../../components/button';
import { FaPlus } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { NumberAnimatd } from '../../../../utils/common';

export default function InfoArtist() {
  return (
    <section className='bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[100px] max-md:py-[90px] max-sm:py-[40px gap-[30px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-[30px] max-w-[600px] max-sm:w-full'>
          <h2 className='font-semibold text-[51px] max-md:text-[38px] max-md:leading-[45px] max-sm:text-[28px] leading-[55px] font-wordSans text-white'>Animakid</h2>
          <div className='hidden max-md:flex flex-row max-sm:flex-col  gap-5'>
              <Button
                icon={<GoCopy fontSize={20} color='#fff' />}
                title={'0xc0E3...B79C'}
                classNameButton={'!px-[30px] !h-[60px]'}
                onClick={() => console.log('copy')}
              />
              <Button
                icon={<FaPlus fontSize={20} color='#A259FF' />}
                title={'Follow'}
                classNameButton={'!bg-black !border-2 !border-[#A259FF] !px-[30px] !h-[60px]'}
                onClick={() => console.log('follow')}
              />
          </div>
          <div className='flex justify-between gap-5 w-[310px] max-sm:w-full'>
            <div className='flex flex-col'>
              <p className='text-[28px] max-md:text-[22px] max-md:leading-6 font-spaceMono leading-10 text-white font-bold'><NumberAnimatd values={250}/></p>
              <p className='font-wordSans font-normal max-md:text-base max-md:leading-6 leading-9 text-[22px] text-white '>Volume</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-[28px] max-md:text-[22px] max-md:leading-6 font-spaceMono leading-10 text-white font-bold'><NumberAnimatd values={250}/></p>
              <p className='font-wordSans font-normal max-md:text-base max-md:leading-6 leading-9 text-[22px] text-white '>Volume</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-[28px] max-md:text-[22px] max-md:leading-6 font-spaceMono leading-10 text-white font-bold'><NumberAnimatd values={250}/></p>
              <p className='font-wordSans font-normal max-md:text-base max-md:leading-6 leading-9 text-[22px] text-white '>Volume</p>
            </div>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-spaceMono leading-9 font-bold'>Bio</p>
            <p className='font-normal text-[22px] leading-8 text-white font-wordSans max-md:font-wordSans max-md:text-base'>
              The internet's friendliest designer kid.
            </p>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-spaceMono leading-9 font-bold'>Links</p>
            <div className='flex flex-row items-center gap-2'>
              <BsGlobe fontSize={22} color='#858584' />
              <TbBrandDiscord fontSize={22} color='#858584' />
              <PiYoutubeLogo fontSize={22} color='#858584' />
              <CiTwitter fontSize={22} color='#858584' />
              <FaInstagram fontSize={22} color='#858584' />
            </div>
          </div>


        </div>
        <div className='flex flex-row gap-5 max-md:hidden'>
          <div>
            <Button
              icon={<GoCopy fontSize={20} color='#fff' />}
              title={'0xc0E3...B79C'}
              classNameButton={' !px-[30px] !h-[60px]'}
              onClick={() => console.log('copy')}
            />
          </div>
          <div>
            <Button
              icon={<FaPlus fontSize={20} color='#A259FF' />}
              title={'Follow'}
              classNameButton={'!bg-black !border-2 !border-[#A259FF] !px-[30px] !h-[60px]'}
              onClick={() => console.log('follow')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
