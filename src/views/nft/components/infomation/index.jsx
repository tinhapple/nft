import React from 'react'
import AVATAR from '../../../../assets/image/avatarngt.png'
import { CiGlobe } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/button';

const dataButton = [
  {
    name: 'Animation',
    path: '/'
  },
  {
    name: 'illustration',
    path: '/'
  },
  {
    name: 'moon',
    path: '/'
  },
  {
    name: 'moon',
    path: '/'
  },
]

export default function Infomation() {
  const navigate = useNavigate();

  const handleNavigate = (values) => {
    navigate(values);
  };
  const handleTime = () => {
    // xử lý cái gì đó khum biết
  };

  return (
    <section className='bg-black py-10 flex flex-col gap-[30px]  px-[115px] max-md:px-[72px] max-sm:px-[30px]'>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 '>
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[10px]'>
            <h2 className='font-semibold text-[51px] max-md:text-[38px] max-sm:text-[28px] font-wordSans leading-[56px] text-white '>The Orbitians</h2>
            <p className='text-[#858584] text-[22px] font-normal leading-8 font-wordSans max-md:text-base max-md:leading-5'>Minted on Sep 30, 2022</p>
          </div>

          <div className='flex sm:hidden h-[234px]'>
            <div className='bg-grey  w-[295px] max-sm:w-full p-[30px] rounded-[20px] flex flex-col gap-[10px]'>
              <p className='font-spaceMono text-[12px] font-normal leading-3 text-white'>Auction ends in:</p>
              <div className='flex flex-col   gap-[30px]'>
                <div className='flex justify-between gap-[10px]'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59 :</p>
                    <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59 :</p>
                    <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59</p>
                    <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                  </div>
                </div>
                <Button
                  title={'Place Bid'}
                  onClick={handleTime}
                  classNameButton={'h-[60px]'}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-spaceMono leading-9 font-bold'>Created By</p>
              <div className='flex gap-3'>
                <img src={AVATAR} alt="avatar" className='w-6 h-6 rounded-full' />
                <p className='font-wordSans text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal leading-7 font-semibold text-white'>Orbitian</p>
              </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-spaceMono leading-9 font-bold'>Description</p>
              <p className='font-normal text-[22px] leading-8 text-white font-wordSans max-md:font-wordSans max-md:text-base'>
                The Orbitians<br />is a collection of 10,000 unique NFTs on the Ethereum blockchain.<br /><br />There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br /><br />They live in a metal space machines, high up in the sky and only have one foot on Earth.<br />These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
              </p>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-spaceMono leading-9 font-bold'>Details</p>
              <div className='flex flex-row gap-[10px] items-center'>
                <CiGlobe className={'w-8 max-md:w-6'} color='#858584' />
                <p className='font-normal text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal leading-8 text-white font-wordSans'>View on Etherscan</p>
              </div>
              <div className='flex flex-row gap-[10px] items-center'>
                <CiGlobe className={'w-8 max-md:w-6'} color='#858584' />
                <p className='font-normal text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal leading-8 text-white font-wordSans'>View Original</p>
              </div>
            </div>


            <div className='flex flex-col gap-[20px]'>
              <p className='text-[#858584] text-[22px] max-md:text-base max-md:leading-6 max-md:font-normal font-wordSans leading-9 font-bold'>Tags</p>
              <div className='flex flex-row gap-[20px] max-md:flex-col'>
                {dataButton.map((item, index) => {
                  return (
                    <button onClick={() => handleNavigate(item.path)} key={index} className='bg-grey flex gap-3 items-center px-[30px] rounded-[20px] h-[46px]'>
                      <p className='text-white text-base font-semibold leading-6 font-wordSans uppercase'>{item.name}</p>
                    </button>
                  )
                })}
              </div>
            </div>


          </div>
        </div>

        <div className='flex max-sm:hidden justify-end h-[234px]'>
          <div className='bg-grey w-[295px] max-sm:w-full p-[30px] rounded-[20px] flex flex-col gap-[10px]'>
            <p className='font-spaceMono text-[12px] font-normal leading-3 text-white'>Auction ends in:</p>
            <div className='flex flex-col gap-[30px]'>
              <div className='flex gap-[10px]'>
                <div className='flex flex-col'>
                  <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59:</p>
                  <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                </div>
                <div className='flex flex-col'>
                  <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59:</p>
                  <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                </div>
                <div className='flex flex-col'>
                  <p className='font-bold text-[38px] leading-[45px] font-spaceMono text-white'>59</p>
                  <p className='font-spaceMono text-[12px] leading-[13px] font-normal text-white'>Hours</p>
                </div>
              </div>
              <Button
                title={'Place Bid'}
                onClick={handleTime}
                classNameButton={'h-[60px] '}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
