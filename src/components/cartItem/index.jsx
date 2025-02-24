import classNames from 'classnames'
import React from 'react'

export default function CartItem({onClick,image,avatar,category,name,price,fluctuations,styleFooter }) {
    return (
        <button onClick={onClick} className='cursor-pointer'>
            <img
                src={image}
                alt="avatar1"
                className={classNames("w-full max-h-[296px] max-md:max-h-[295px] rounded-t-[20px] max-sm:max-h-[238px] object-fill")}
            />
            <div className={classNames("bg-grey flex flex-col rounded-b-[20px] px-[18px]  pt-[20px] pb-[25px] gap-[25px]",styleFooter)}>
                <div className='flex flex-col gap-[5px]'>
                    <p className='font-wordSans font-semibold leading-[30.8px] text-[22px] text-white text-left'>{category}</p>
                    <div className='flex gap-[10px] items-center'>
                        <img src={avatar} alt="avatar1" className='w-8 h-8 rounded-full' />
                        <p className='font-spaceMono font-normal text-base text-white leading-[22.4px]'>{name}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-left text-[#858584] font-spaceMono font-normal text-[12px] leading-[13.2px]'>Price</p>
                        <p className='text-left text-white font-spaceMono font-normal text-base leading-[13.2px]'>{price} ETH</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-right text-[#858584] font-spaceMono font-normal text-[12px] leading-[13.2px]'>Highest Bid</p>
                        <p className='text-right text-white font-spaceMono font-normal text-base leading-[13.2px]'>{fluctuations} wETH</p>
                    </div>
                </div>
            </div>
        </button>
    )
}
