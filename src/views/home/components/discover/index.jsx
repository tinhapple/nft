import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import AVATAR1 from "../../../../assets/image/avatarkhampha1.png"
import AVATAR2 from "../../../../assets/image/avatarkhampha2.png"
import AVATAR3 from "../../../../assets/image/avatarkhampha3.png"
import IMAGEKHAMPHA1 from "../../../../assets/image/khampha1.png"
import IMAGEKHAMPHA2 from "../../../../assets/image/khampha2.png"
import IMAGEKHAMPHA3 from "../../../../assets/image/khampha3.png"
import CartItem from '../../../../components/cartItem';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        name: "MoonDancer",
        avatar: AVATAR1,
        image: IMAGEKHAMPHA1,
        category: 'Distant Galaxy',
        price: 1.63,
        fluctuations: 0.,
        path: '/nft'
    },
    {
        name: "Life On Edena",
        avatar: AVATAR2,
        image: IMAGEKHAMPHA2,
        category: 'NebulaKid',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Spaceone",
        avatar: AVATAR3,
        image: IMAGEKHAMPHA3,
        category: 'AstroFiction',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
]

export default function Discover() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
    return (
        <section className=' flex flex-col bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-md:gap-[40px] max-sm:gap-[40px] gap-[60px]'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-[10px] w-[60%] max-sm:w-full'>
                    <h2 className=' font-semibold text-[38px] max-md:text-[28px] max-sm:text-[28px] max-sm:leading-10 leading-10 font-wordSans text-white'>Discover More NFTs</h2>
                    <p className='text-white font-normal text-[22px] max-sm:text-base max-md:text-base font-wordSans leading-6'>Explore new trending NFTs</p>
                </div>
                <div className='hidden sm:block'>
                    <button className='flex self-end items-center gap-3 px-[30px] h-[60px] rounded-[20px] border-2 border-[#A259FF] cursor-pointer'>
                        <IoEyeOutline size={20} color="#A259FF" />
                        <p className='text-base font-wordSans leading-[22px] font-semibold text-white'>See All</p>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px]'>
                {data.map((item, index) => {
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

        </section>
    )
}
