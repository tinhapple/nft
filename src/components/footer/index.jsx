import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbBrandDiscord } from "react-icons/tb";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const dataButton = [
    {
        label: "Marketplace",
        path: "/marketplace",
    },
    {
        label: "Rankings",
        path: "/rankings",
    },
    {
        label: "Connect a wallet",
        path: "/wallet",
    },
];

export default function Footer() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleNavigate = (values) => {
        navigate(values);
    };

    const sendEmail = () => {
        if (!email) {
            return true
        }
        // cầm cái value email gửi lên để call api 
    };


    return (
        <footer className="flex flex-col gap-[30px] bg-grey px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[40px]">
            <div className="flex flex-col md:flex-row md:justify-between max-md:gap-[30px]">
                <section className="flex flex-col md:gap-[30px] max-md:gap-5">
                    <button
                        onClick={() => handleNavigate("/")}
                        className="flex items-center cursor-pointer"
                    >
                        <img
                            src={require("../../assets/image/logo.png")}
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <p className="text-primary font-spaceMono text-[22px] font-semibold">
                            NFT Marketplace
                        </p>
                    </button>
                    <p className="font-wordSans font-normal text-base leading-[22.4px] text-[#ccc] md:w-[238px]">
                        NFT marketplace UI created with Anima for Figma.
                    </p>
                    <p className="font-wordSans font-normal text-base leading-[22.4px] text-[#ccc] md:w-[238px]">
                        Join our community
                    </p>
                    <div className='flex flex-row items-center gap-2'> 
                    <TbBrandDiscord fontSize={22} color='#858584'/>
                    <PiYoutubeLogo fontSize={22} color='#858584'/>
                    <CiTwitter fontSize={22} color='#858584'/>
                    <FaInstagram fontSize={22} color='#858584'/>
                    </div>

                </section>

                <section className="flex flex-col md:w-[240px] md:gap-[25px] max-md:gap-5">
                    <p className="text-primary font-spaceMono text-[22px] font-bold leading-9">
                        Explore
                    </p>
                    {dataButton.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigate(item.path)}
                                className="text-[#ccc] text-base font-wordSans text-start font-normal leading-[22.4px] pointer"
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </section>

                <section className="flex flex-col items-start  md:gap-[25px] max-md:gap-5">
                    <p className="text-primary text-start font-spaceMono text-[22px] font-bold leading-9">
                        Join our weekly digest
                    </p>
                    <p className="font-wordSans font-normal text-base leading-[22.4px] text-[#ccc] md:w-[330px]">
                        Get exclusive promotions & updates straight to your inbox.
                    </p>

                    <div class="flex items-center rounded-[20px] overflow-hidden max-sm:w-full">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email here"
                            class="flex-1  px-[20px] h-[60px] text-base font-normal text-gray-800 focus:outline-none"
                        />
                        <div className='bg-white'>
                            <button
                                onClick={sendEmail}
                                class="sm:block hidden bg-purple rounded-[20px]  text-white px-[20px] h-[60px] text-base font-medium focus:outline-none">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={sendEmail}
                        className="hidden max-sm:block bg-purple w-full rounded-[20px] text-white px-[20px] h-[60px] text-base font-medium focus:outline-none">
                        Subscribe
                    </button>
                </section>
            </div>
            <div className='pt-[12px] border-t-[1px] border-t-[#858584]'>
                <p className='font-normal text-[12px] leading-3 font-wordSans text-[#ccc]'>Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </footer>
    );
}
