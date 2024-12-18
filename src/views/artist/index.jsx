import React, { useState } from 'react'
import BACKGROUND from '../../assets/image/bg-artist.png'
import AVATAR from '../../assets/image/avatarArtist.png'
import InfoArtist from './components/infoArtist'
import { TypeTabArtist } from '../../constants/common';
import Created from './components/created';
import Owned from './components/owned';
import Collection from './components/collection';
import { NumberAnimatd } from '../../utils/common';


const tabs = [
  { value: TypeTabArtist.CREATED, label: 'Created', notification: 302 },
  { value: TypeTabArtist.OWNED, label: 'owned', notification: 67 },
  { value: TypeTabArtist.COLLECTION, label: 'Collection', notification: 4 },
];

export default function Artist() {
  const [activeTab, setActiveTab] = useState(TypeTabArtist.CREATED);

  return (
    <body>
      <section className='relative'>
        <img src={BACKGROUND} alt="background" className='w-full h-[320px] max-md:h-[280px] max-sm:h-[250px] object-cover ' />
        <img src={AVATAR} alt="avatar" className='absolute bottom-[-60px] left-[80px] max-md:left-[50px] max-sm:left-[50%] max-sm:translate-x-[-50%] rounded-[20px] w-[120px] h-[120px] border-2 border-[#2B2B2B] bg-grey' />
      </section>
      <InfoArtist />
      <nav className='flex w-full bg-black border-b-2 border-transparent border-t-[1px] border-t-[#3B3B3B]'>
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
                <p className='text-center font-spaceMono text-white font-normal text-base leading-6' ><NumberAnimatd values={tab.notification}/> </p>
              </div>
            </div>
          </button>
        ))}

      </nav>

      {activeTab === TypeTabArtist.CREATED && <Created />}
      {activeTab === TypeTabArtist.COLLECTION && <Collection />}
      {activeTab === TypeTabArtist.OWNED && <Owned />}


    </body>
  )
}
