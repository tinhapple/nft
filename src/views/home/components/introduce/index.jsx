import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/button';
import { LuRocket } from "react-icons/lu";
import { formatNumber } from '../../../../utils/common';

const data = [
    { name: 'Total Sale', total: 240000 },
    { name: 'Auctions', total: 100000 },
    { name: 'Artists', total: 240000 },
]
export default function Introduce() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
    return (
        <section className=' flex justify-between max-sm:flex-col bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-sm:gap-[30px] gap-[30px]'>
            <div className='flex-1 flex flex-col gap-[25px] max-md:gap-5 max-sm:gap-10'>
                <div className='max-w-[418px] gap-5 max-sm:gap-[10px]'>
                    <h1 className=' font-semibold text-[67px] max-md:text-[36px] max-sm:text-[28px] max-sm:leading-10 leading-[73.7px] max-md:leading-10 font-wordSans text-white'>
                        Discover digital art & Collect NFTs
                    </h1>
                    <p className='text-white font-normal text-[22px] max-sm:text-base max-md:text-base max-md:leading-6 font-wordSans leading-9'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                </div>
                <div className='hidden sm:block'>
                    <Button
                        icon={<LuRocket size={20} color="#fff" />}
                        title={"Get Started"}
                        classNameButton={"px-[50px] h-[60px]"}
                        onClick={() => handleNavigate("/")}
                    />
                </div>
                <div className='hidden sm:block'>
                    <div className='flex justify-between'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className=''>
                                    <p className='text-white font-spaceMono text-[28px] max-md:text-[22px] font-bold leading-9'>{formatNumber(item.total)}k+</p>
                                    <h2 className='text-white font-normal text-[24px] max-md:text-base max-md:leading-6 leading-9 font-wordSans'>{item.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='flex-1 md:flex md:justify-end'>
                <button onClick={() => handleNavigate('/artist')} className='max-w-[510px] max-md:max-w-[330px] max-sm:max-w-full cursor-pointer'>
                    <img
                        src={require("../../../../assets/image/image1.png")}
                        alt="image1"
                        className="w-full h-[410px] max-md:h-[230px] object-fill rounded-t-[20px]"
                    />
                    <div className='bg-grey rounded-b-[20px] p-[20px]'>
                        <p className='text-white font-wordSans font-semibold text-[22px] leading-8'>Space Walking</p>
                        <div className='flex items-center gap-3'>
                            <img
                                src={require('../../../../assets/image/Avatar.png')}
                                alt="avatar"
                                className='rounded-full'
                            />
                            <p className='text-white font-wordSans font-normal text-base leading-6'>Animakid</p>
                        </div>
                    </div>
                </button>
            </div>

            <div className='hidden max-sm:block'>
                <div >
                    <Button
                        icon={<LuRocket size={20} color="#fff" />}
                        title={"Get Started"}
                        classNameButton={"px-[50px] h-[60px] !w-full"}
                        onClick={() => handleNavigate("/")}
                    />
                </div>

            </div>
            <div className='hidden max-sm:block order-3'>
                <div className='flex justify-between'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <p className='text-white font-spaceMono text-[28px] max-md:text-[22px] font-bold leading-9'>{formatNumber(item.total)}k+</p>
                                <h2 className='text-white font-normal text-[24px] max-md:text-base max-md:leading-6 leading-9 font-wordSans'>{item.name}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
