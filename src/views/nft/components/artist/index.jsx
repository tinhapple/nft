import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CartItem from '../../../../components/cartItem';
import IMAGE1 from "../../../../assets/image/nft1.png"
import IMAGE2 from "../../../../assets/image/nft2.png"
import IMAGE3 from "../../../../assets/image/nft3.png"
import IMAGE4 from "../../../../assets/image/nft4.png"
import IMAGE5 from "../../../../assets/image/nft5.png"
import IMAGE6 from "../../../../assets/image/nft6.png"
import IMAGE7 from "../../../../assets/image/nft7.png"
import IMAGE8 from "../../../../assets/image/nft8.png"
import IMAGE9 from "../../../../assets/image/nft9.png"
import AVATAR from "../../../../assets/image/avatarngt.png"

const dataArtist = [
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE1,
        category: 'Foxy Life',
        price: 1.63,
        fluctuations: 0.,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE2,
        category: 'Cat from future',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE3,
        category: 'Psycho Dog',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE4,
        category: 'Designer Bear',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE5,
        category: 'Dancing Robot 0375',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE6,
        category: 'Dancing Robot 0356',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE7,
        category: 'Dancing Robot 0321',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE8,
        category: 'Dancing Robot 0512',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Orbitian",
        avatar: AVATAR,
        image: IMAGE9,
        category: 'Dancing Robot 0024',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
]

export default function Artist() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('artist');
    };
    return (
        <section className='py-[80px] flex flex-col bg-black px-[115px] max-md:px-[72px] max-sm:px-[30px] max-md:py-[50px] max-sm:py-[40px] gap-[60px] '>
            <div className='flex justify-between '>
                <h2 className=' font-semibold text-[38px] max-md:text-[28px] leading-10 font-wordSans text-white'>Discover More NFTs</h2>
                <div className='hidden sm:block'>
                    <button onClick={handleNavigate} className='flex self-end items-center gap-3 px-[30px] h-[60px] rounded-[20px] border-2 border-[#A259FF] cursor-pointer'>
                        <MdArrowForward size={20} color="#A259FF" />
                        <p className='text-base font-wordSans leading-[22px] font-semibold text-white'>Go To Artist Page</p>
                    </button>
                </div>

            </div>

            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px]'>
                {dataArtist.map((item, index) => {
                    return (
                        <CartItem
                            key={index}
                            onClick={() => handleNavigate(item.path)}
                            image={item.image}
                            avatar={item.avatar}
                            category={item.category}
                            name={item.name}
                            price={item.price}
                            fluctuations={item.fluctuations}
                        />
                    )
                })}
            </div>

            <div className='hidden max-sm:block'>
                <button onClick={handleNavigate} className='flex items-center gap-3 w-full justify-center h-[60px] rounded-[20px] border-2 border-[#A259FF] cursor-pointer'>
                    <MdArrowForward size={20} color="#A259FF" />
                    <p className='text-base font-wordSans leading-[22px] font-semibold text-white'>View Rankings</p>
                </button>
            </div>

        </section>
    )
}
