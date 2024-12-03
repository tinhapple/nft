import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Collections from './components/collections/index.jsx';
import Nfts from './components/nft.js/index.jsx';
import { TypeTabMarket } from '../../constants/common.jsx';

export default function Marketplace() {
    const [searchValue, setSearchValue] = useState('');
    const [activeTab, setActiveTab] = useState(TypeTabMarket.NFT);

    const handleSearch = () => {
        console.log('-------------------', searchValue);
    }
    const tabs = [
        { value: TypeTabMarket.NFT, label: 'NFTs', notification: 302 },
        { value: TypeTabMarket.COLLECTIONS, label: 'Collections', notification: 67 },
    ];

    return (
        <body className='bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] gap-10'>
            <section className='py-[80px] max-md:py-[60px] gap-[30px] flex flex-col'>
                <div className='flex flex-col gap-[10px]'>
                    <h2 className='font-semibold text-[51px] max-sm:text-[28px] leading-[55px] font-wordSans text-white'>Browse Marketplace</h2>
                    <p className='text-[22px] max-sm:text-base leading-8 font-normal text-white font-wordSans'>
                        Browse through more than 50k NFTs on the NFT Marketplace.
                    </p>
                </div>
                <div className='bg-black border-[1px] border-[#858584] rounded-[20px] py-3 flex flex-row justify-between px-5'>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search your favourite NFTs"
                        className="bg-black w-[90%] placeholder:text-[#858584] text-white font-wordSans font-semibold text-base outline-none border-none"
                    />
                    <button onClick={handleSearch} className='cursor-pointer'>
                        <CiSearch fontSize={24} color='#fff' />
                    </button>
                </div>
            </section>

            <nav className='flex w-full border-b-2 border-transparent'>
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`flex-1 text-center py-3 font-semibold leading-7 ${activeTab === tab.value ? 'border-b-2 border-[#858584]' : 'border-b-2 border-transparent'
                            }`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        <div className='flex items-center justify-center gap-4'>
                            <p className={`text-[22px] max-md:text-base ${activeTab === tab.value ? 'text-white' : 'text-[#858584]'}`}>{tab.label}</p>
                            <div className='max-sm:hidden px-[10px] py-[5px] rounded-[20px] bg-[#858584]'>
                                <p className='text-center font-spaceMono text-white font-normal text-base leading-6' >{tab.notification}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </nav>

            <div className='py-6'>
                {activeTab === TypeTabMarket.NFT && <Nfts />}
                {activeTab === TypeTabMarket.COLLECTIONS && <Collections />}
            </div>
        </body>
    )
}
