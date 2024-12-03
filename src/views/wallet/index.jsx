import React from 'react'
import BACKGROUNDSINGUP from '../../assets/image/bglogin.png'
import META from '../../assets/image/metamask.png'
import WALLET from '../../assets/image/WalletConnect.png'
import COIN from '../../assets/image/Coinbase.png'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        image: META,
        name: "Metamask",
        path: '/'
    },
    {
        image: WALLET,
        name: "Wallet Connect",
        path: '/'
    },
    {
        image: COIN,
        name: "Coinbase",
        path: '/'
    },
]
export default function Wallet() {
    const navigate = useNavigate();
    const handleCoin = (values) => {
        navigate(values);
    }

    return (
        <body className='min-h-96 bg-grey grid grid-cols-2 max-sm:grid-cols-1 gap-[60px] max-md:gap-10' >
            <div>
                <img src={BACKGROUNDSINGUP} alt="signup" className='w-full h-[602px] max-md:h-[530px] max-sm:h-[300px]' />
            </div>
            <div className='py-[100px] max-md:py-[80px] max-sm:pt-[30px] max-sm:pb-10 flex flex-col max-sm:items-center gap-10 max-md:gap-3'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[51px] max-md:text-[38px] max-md:leading-[45px] font-wordSans font-semibold leading-[56px] text-white'>Connect wallet</h2>
                    <div className='max-w-[420px] max-md:max-w-[320px]'>
                        <p className='font-wordSans text-[22px] max-md:text-base max-md:leading-6 max-sm:text-base max-sm:leading-6 leading-9 font-normal text-white '>Choose a wallet you want to connect. There are several wallet providers.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'> 
                    {data.map((item, index) => {
                        return (
                            <button key={index} onClick={() => handleCoin(item.path)} className='bg-grey rounded-[20px] border-[1px] border-[#A259FF] pl-[20px] w-[320px] flex items-center h-[72px] gap-5'>
                                <img src={item.image} alt="coin" className='w-10 h-[37px]' />
                                <p className='font-wordSans font-semibold text-[22px] leading-7 text-white'>{item.name}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </body>
    )
}
