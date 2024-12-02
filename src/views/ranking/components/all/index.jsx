import React from 'react'
import AVATAR1 from '../../../../assets/image/Avatarcreator1.png'
import AVATAR2 from '../../../../assets/image/Avatarcreator2.png'
import AVATAR3 from '../../../../assets/image/Avatarcreator3.png'
import AVATAR4 from '../../../../assets/image/Avatarcreator4.png'
import AVATAR5 from '../../../../assets/image/Avatarcreator5.png'
import AVATAR6 from '../../../../assets/image/Avatarcreator6.png'
import AVATAR7 from '../../../../assets/image/Avatarcreator7.png'
import AVATAR8 from '../../../../assets/image/Avatarcreator8.png'
import AVATAR9 from '../../../../assets/image/Avatarcreator9.png'
import AVATAR10 from '../../../../assets/image/Avatarcreator10.png'
import AVATAR11 from '../../../../assets/image/Avatarcreator11.png'
import AVATAR12 from '../../../../assets/image/Avatarcreator12.png'
import AVATAR13 from '../../../../assets/image/Avatarcreator1.png'
import AVATAR14 from '../../../../assets/image/Avatarcreator2.png'
import AVATAR15 from '../../../../assets/image/Avatarcreator4.png'
import AVATAR16 from '../../../../assets/image/Avatarcreator7.png'
import AVATAR17 from '../../../../assets/image/Avatarcreator9.png'
import AVATAR18 from '../../../../assets/image/Avatarcreator3.png'
import AVATAR19 from '../../../../assets/image/Avatarcreator10.png'

const data = [
    {
        rank: 1,
        name: 'Jaydon Ekstrom Bothman',
        avatar: AVATAR1,
        change: 1.41,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 2,
        name: 'Ruben Carder',
        avatar: AVATAR2,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 3,
        name: 'Ruben Carder',
        avatar: AVATAR3,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 4,
        name: 'Alfredo Septimus',
        avatar: AVATAR4,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 5,
        name: 'Davis Franci',
        avatar: AVATAR5,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 6,
        name: 'Livia Rosser',
        avatar: AVATAR6,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 7,
        name: 'Kianna Donin',
        avatar: AVATAR7,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 8,
        name: 'Phillip Lipshutz',
        avatar: AVATAR8,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 9,
        name: 'Maria Rosser',
        avatar: AVATAR9,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 10,
        name: 'Kianna Stanton',
        avatar: AVATAR10,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 11,
        name: 'Angel Lubin',
        avatar: AVATAR11,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 12,
        name: 'Allison Torff',
        avatar: AVATAR12,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 13,
        name: 'Davis Workman',
        avatar: AVATAR13,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 14,
        name: 'Lindsey Lipshutz',
        avatar: AVATAR14,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 15,
        name: 'Randy Carder',
        avatar: AVATAR15,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 16,
        name: 'Lydia Culhane',
        avatar: AVATAR16,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 17,
        name: 'Rayna Bator',
        avatar: AVATAR17,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 18,
        name: 'Jocelyn Westervelt',
        avatar: AVATAR18,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 19,
        name: 'Marilyn Torff',
        avatar: 19,
        change: -2,
        nft: 602,
        price: 12.4,
    },
    {
        rank: 19,
        name: 'Skylar Levin',
        avatar: AVATAR19,
        change: -2,
        nft: 602,
        price: 12.4,
    },
]

export default function All() {
    return (
        <section className="bg-black py-10 text-white gap-5 flex flex-col">
            <div className="flex border-[1px] border-[#3B3B3B] rounded-[20px] py-3 text-base font-spaceMono font-normal leading-6 text-[#858584]">
                <div className="w-[10%] text-center">#</div>
                <div className="max-md:w-[60%] max-sm:w-[65%] w-[40%] ">Artist</div>
                <div className="max-md:w-[15%] hidden sm:block w-[16.67%] text-center">Change</div>
                <div className="hidden md:block w-[16.67%] text-center">NFTs Sold</div>
                <div className="max-md:w-[15%] max-sm:w-[25%] w-[16.67%] text-center">Volume</div>
            </div>

            {data.map((item, index) => {
                return (
                    <div key={index} className='bg-grey flex rounded-[20px] py-3'>
                        <div className="w-[10%] flex items-center justify-center ">
                            <div
                                className='text-center text-[#858584] text-base leading-6 font-spaceMono 
                                    bg-black rounded-full w-[30px] h-[30px] 
                                    max-md:bg-transparent max-md:rounded-none max-md:w-auto max-md:h-auto'>
                                {item.rank}
                            </div>
                        </div>
                        <div className="w-[40%] max-md:w-[60%] max-sm:w-[65%]">
                            <div className='flex gap-[10px] items-center'>
                                <img src={item.avatar} alt="avatar" className='w-[60px] h-[60px] max-md:w-6 max-md:h-6' />
                                <p className='font-semibold text-[22px] max-sm:text-base max-sm:leading-6 leading-7 font-wordSans text-white'>{item.name}</p>
                            </div>
                        </div>
                        <div className={`max-md:w-[15%] w-[16.67%] max-sm:hidden  max-sm:text-[12px] max-sm:leading-[12px] flex items-center justify-center text-base font-spaceMono leading-6 font-normal ${item.change < 0 ? "text-red-500" : "text-[#00AC4F]"
                            }`}> {item.change} %</div>
                        <div className="max-md:hidden  w-[16.67%] items-center flex justify-center text-base font-spaceMono leading-6 font-normal text-white">{item.nft}</div>
                        <div className="max-md:w-[15%] w-[16.67%] max-sm:w-[25%] max-sm:text-[12px] max-sm:leading-[12px] items-center flex justify-center text-base font-spaceMono leading-6 font-normal text-white">{item.price} ETH</div>
                    </div>
                )
            })}

        </section>
    )
}
