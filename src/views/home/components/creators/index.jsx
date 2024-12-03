import React from 'react'
import { LuRocket } from "react-icons/lu";
import AVATAR1 from "../../../../assets/image/Avatarcreator1.png"
import AVATAR2 from "../../../../assets/image/Avatarcreator2.png"
import AVATAR3 from "../../../../assets/image/Avatarcreator3.png"
import AVATAR4 from "../../../../assets/image/Avatarcreator4.png"
import AVATAR5 from "../../../../assets/image/Avatarcreator5.png"
import AVATAR6 from "../../../../assets/image/Avatarcreator6.png"
import AVATAR7 from "../../../../assets/image/Avatarcreator7.png"
import AVATAR8 from "../../../../assets/image/Avatarcreator8.png"
import AVATAR9 from "../../../../assets/image/Avatarcreator9.png"
import AVATAR10 from "../../../../assets/image/Avatarcreator10.png"
import AVATAR11 from "../../../../assets/image/Avatarcreator11.png"
import AVATAR12 from "../../../../assets/image/Avatarcreator12.png"
import { useNavigate } from 'react-router-dom';

const data = [
    {
        rank: 1,
        name: 'Keepitreal',
        avatar: AVATAR1,
        total: 34.53
    },
    {
        rank: 2,
        name: 'DigiLab',
        avatar: AVATAR2,
        total: 34.53
    },
    {
        rank: 3,
        name: 'GravityOne',
        avatar: AVATAR3,
        total: 34.53
    },
    {
        rank: 4,
        name: 'Juanie',
        avatar: AVATAR4,
        total: 34.53
    },
    {
        rank: 5,
        name: 'BlueWhale',
        avatar: AVATAR5,
        total: 34.53
    },
    {
        rank: 6,
        name: 'mr fox',
        avatar: AVATAR6,
        total: 34.53
    },
    {
        rank: 7,
        name: 'Shroomie',
        avatar: AVATAR7,
        total: 34.53
    },
    {
        rank: 8,
        name: 'robotica',
        avatar: AVATAR8,
        total: 34.53
    },
    {
        rank: 9,
        name: 'RustyRobot',
        avatar: AVATAR9,
        total: 34.53
    },
    {
        rank: 10,
        name: 'animakid',
        avatar: AVATAR10,
        total: 34.53
    },
    {
        rank: 11,
        name: 'Dotgu',
        avatar: AVATAR11,
        total: 34.53
    },
    {
        rank: 12,
        name: 'Ghiblier',
        avatar: AVATAR12,
        total: 34.53
    },
]

export default function Creators() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
    return (
        <section className=' flex flex-col bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-md:gap-[40px] max-sm:gap-[40px] gap-[60px]'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-[10px] w-[60%]'>
                    <h2 className=' font-semibold text-[38px] max-md:text-[28px] max-sm:text-[28px] max-sm:leading-10 leading-10 font-wordSans text-white'>Trending Collection</h2>
                    <p className='text-white font-normal text-[22px] max-sm:text-base max-md:text-base font-wordSans leading-6'>Checkout our weekly updated trending collection.</p>
                </div>
                <div className='hidden sm:block'>
                    <button className='flex self-end items-center gap-3 px-[30px] h-[60px] rounded-[20px] border-2 border-[#A259FF] cursor-pointer'>
                        <LuRocket size={20} color="#A259FF" />
                        <p className='text-base font-wordSans leading-[22px] font-semibold text-white'>View Rankings</p>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='relative w-auto h-auto flex flex-col max-md:flex-row items-center  bg-grey p-5 rounded-[20px] gap-5'>
                            <div>
                                <img src={item.avatar} alt="avatar1" className='w-[60px] h-[60px] rounded-full object-contain' />
                            </div>
                            <div className='absolute top-4 left-4 bg-black flex items-center justify-center w-[30px] h-[30px] rounded-full'>
                                <p className='text-[#858584] text-base text-center line-clamp-6 font-normal font-spaceMono'>{item.rank}</p>
                            </div>
                            <div className='gap-[5px]'>
                                <p className='text-[22px] font-semibold leading-7 font-wordSans text-white text-center max-md:text-left'>{item.name}</p>
                                <p className='text-[#858584] font-normal leading-5 text-base font-wordSans'>Total Sales: <span className='text-white font-spaceMono'>{item.total} ETH</span></p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='hidden max-sm:block'>
                <button  onClick={() => handleNavigate("/")} className='flex items-center gap-3 w-full justify-center h-[60px] rounded-[20px] border-2 border-[#A259FF] cursor-pointer'>
                    <LuRocket size={20} color="#A259FF" />
                    <p className='text-base font-wordSans leading-[22px] font-semibold text-white'>View Rankings</p>
                </button>
            </div>
        </section >
    )
}
