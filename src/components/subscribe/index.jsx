import React, { useState } from 'react'
import IMAGE from '../../assets/image/subscribe.png'
import { CiMail } from "react-icons/ci";
export default function Subscribe() {
    const [email, setEmail] = useState('');


    const sendEmail = () => {
        if (!email) {
            return true
        }
        // cầm cái value email gửi lên để call api 
    };

    return (
        <section className='flex flex-row bg-black px-[115px] max-md:px-[72px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px]'>
            <div className='grid grid-cols-2 max-sm:grid-cols-1 bg-grey w-full rounded-[20px] max-sm:rounded-none max-sm:p-0 max-sm:bg-black gap-[50px] max-md:gap-[30px] py-[60px] px-10'>
                <div className='flex justify-center'>
                    <img src={IMAGE} alt="subscribe" className='w-[425px] max-md:w-[300px] max-sm:w-full h-[310px] max-md:max-h-[280px] rounded-[20px]' />
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <h2 className='text-white max-md:text-[28px] font-semibold text-[38px] leading-[45.6px] max-md:leading-[39.2px] font-wordSans'>Join our weekly digest</h2>
                        <p className='text-[22px] max-md:text-base leading-[35.2px] max-md:leading-[22.4px] font-normal font-wordSans text-white'>Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                  <div className='w-full max-md:gap-4 flex flex-col'>
                  <div class="flex items-center rounded-[20px] overflow-hidden max-sm:w-full">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email Address"
                            class="flex-1 px-[20px] h-[60px] text-base font-normal text-[#2B2B2B] focus:outline-none "
                        />
                        <div className='bg-white'>
                            <button
                                onClick={sendEmail}
                                class="flex flex-row items-center gap-x-2 bg-purple rounded-[20px] text-white px-[20px] h-[60px] text-base font-medium focus:outline-none max-md:hidden">
                                <CiMail size={20} color="#fff" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={sendEmail}
                        class="flex md:hidden w-full justify-center items-center gap-x-2 bg-purple rounded-[20px] text-white px-[20px] h-[60px] text-base font-medium focus:outline-none">
                        <CiMail size={20} color="#fff" />
                        Subscribe
                    </button>
                  </div>
                </div>
            </div>
        </section>
    )
}
