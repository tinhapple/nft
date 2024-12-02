import React from 'react';
import BACKGROUND from '../../../assets/image/magic.png';
import AVATAR from '../../../assets/image/Avatarcreator7.png';
import { IoEyeOutline } from "react-icons/io5";

export default function Magic() {
    return (
        <section
            className="w-full max-h-[640px] bg-gradient-to-t overflow-hidden pt-[310px] max-sm:pt-[160px]  pb-[60px] max-md:px-[50px] max-sm:px-[30px]  px-[80px]"
            style={{
                backgroundImage: `linear-gradient(to top, #A259FF 0%, #A259FF 10%, transparent 100%), url(${BACKGROUND})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='flex flex-row max-sm:flex-col justify-between max-sm:gap-[30px]'>
                <div className='flex flex-col gap-[30px]'>
                    <div className='bg-grey flex items-center w-[151px] h-[44px]  px-[20px] py-[10px] rounded-[20px] gap-3'>
                        <img src={AVATAR} alt="avatar" className='w-6 h-6' />
                        <p className='font-wordSans font-normal leading-6 text-white text-base'>Shroomie</p>
                    </div>
                    <h2 className='font-semibold text-[51px] max-md:text-[38px] max-md:leading-[45px] leading-[56px] text-white font-wordSans '>Magic Mashrooms</h2>

                    <button className='flex bg-white items-center justify-center w-[198px] h-[60px] py-[22px] px-[50px] gap-3 rounded-[20px]'>
                        <IoEyeOutline color='#A259FF' fontSize={20} />
                        <p className='text-[#2B2B2B] font-wordSans leading-5 text-base text-center font-semibold'>See NFT</p>
                    </button>
                </div>
                <div className='bg-grey self-end max-sm:w-full bg-opacity-50 p-[30px] rounded-[20px] flex flex-col gap-[10px]'>
                    <p className='font-spaceMono text-[12px] font-normal leading-3 text-white'>Auction ends in:</p>
                    <div className='flex flex-col '>
                        <div className='flex justify-center gap-[10px]'>
                            <div className='flex flex-col'>
                                <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59:</p>
                                <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59:</p>
                                <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59</p>
                                <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
