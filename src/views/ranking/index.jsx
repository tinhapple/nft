import React, { useState } from 'react';
import Today from './components/today';
import Week from './components/week';
import Month from './components/month';
import All from './components/all';
import { TypeTabRank } from '../../constants/common';

export default function Rankings() {
    const [activeTab, setActiveTab] = useState(TypeTabRank.TODAY);

    const tabs = [
        { value: TypeTabRank.TODAY, label: 'Today', smLabel: '1d' },
        { value: TypeTabRank.WEEK, label: 'This Week', smLabel: '7d' },
        { value: TypeTabRank.MONTH, label: 'This Month', smLabel: '30d' },
        { value: TypeTabRank.ALL, label: 'All Time', smLabel: 'All' },
    ];

    return (
        <body className='bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px]'>
            <section className='py-[80px] max-md:py-10 max-sm:py-[30px] max-sm:gap-[10px]  flex flex-col gap-5'>
                <h2 className='font-semibold text-[51px] max-sm:text-[28px] leading-[55px] font-wordSans text-white'>Top Creators</h2>
                <p className='text-[22px] max-sm:text-base leading-8 font-normal text-white font-wordSans'>
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </section>

            <nav className='flex w-full border-b-2 border-transparent'>
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`flex-1 text-center py-3 text-white font-semibold leading-7 ${activeTab === tab.value ? 'border-b-2 border-[#858584]' : 'border-b-2 border-transparent'
                            }`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        <span className='text-[22px] max-md:text-base hidden sm:inline'>{tab.label}</span>
                        <span className='text-[22px] max-md:text-base sm:hidden'>{tab.smLabel}</span>
                    </button>
                ))}
            </nav>

            <div className='py-6'>
                {activeTab === TypeTabRank.TODAY && <Today />}
                {activeTab === TypeTabRank.WEEK && <Week />}
                {activeTab === TypeTabRank.MONTH && <Month />}
                {activeTab === TypeTabRank.ALL && <All />}
            </div>
        </body>
    );
}
