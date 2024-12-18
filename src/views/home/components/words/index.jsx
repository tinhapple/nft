import React from 'react'
import WALLET from '../../../../assets/image/wallet.png'
import MUSSIC from '../../../../assets/image/mussic.png'
import SHOPPING from '../../../../assets/image/shoping.png'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        title: 'Setup Your wallet',
        image: WALLET,
        describe: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
    },
    {
        title: 'Create Collection',
        image: MUSSIC,
        describe: 'Upload your work and setup your collection. Add a description, social links and floor price.'
    },
    {
        title: 'Start Earning',
        image: SHOPPING,
        describe: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
    },
]
export default function Words() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
    return (
        <section className='flex flex-col justify-between max-sm:flex-col bg-black px-[115px] max-md:px-[72px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-sm:gap-[40px] gap-[48px]'>
            <div className='flex flex-col gap-[10px]'>
                <h2 className=' font-semibold text-[38px] max-md:text-[28px] max-sm:text-[28px] max-sm:leading-10 leading-10 font-wordSans text-white'>How it works</h2>
                <p className='text-white font-normal text-[22px] max-sm:text-base max-md:text-base font-wordSans leading-6'>Find out how to get started</p>
            </div>
            <div className='grid grid-cols-3 gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1'>
                {data.map((item, index) => {
                    return (
                        <button key={index} onClick={() => handleNavigate(item.path)} className='rounded-[20px] flex flex-col max-sm:flex-row items-center bg-grey px-[30px] max-md:px-[20px] max-sm:p-5 pt-[10px] pb-[30px] cursor-pointer'>
                            <img src={item.image} alt="Wallet" className='w-[250px] max-md:w-[160px] max-md:max-h-[160px] max-sm:max-w-[100px] max-sm:max-h-[100px]' />
                            <div className='flex flex-col gap-[10px]'>
                                <p className='text-center max-sm:text-left font-semibold leading-7 text-[22px] max-sm:text-base max-md:text-base font-wordSans text-white'>{item.title}</p>
                                <p className='text-center max-sm:text-left font-spaceMono font-normal leading-5 text-base max-sm:text-[12px] max-md:text-[12px] text-white'>{item.describe}</p>
                            </div>
                        </button>
                    )
                })}
            </div>
        </section>
    )
}
