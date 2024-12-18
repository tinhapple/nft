import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/button';
import { LuRocket } from "react-icons/lu";
import { fadeIn, NumberAnimatd } from '../../../../utils/common';
import { motion } from "framer-motion"

const data = [
    { name: 'Total Sale', total: 240 },
    { name: 'Auctions', total: 100 },
    { name: 'Artists', total: 240 },
]


export default function Introduce() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };


    return (
        <section className='grid grid-cols-2 max-sm:grid-cols-1 bg-black px-[115px] max-md:px-[72px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-sm:gap-[30px] gap-[30px]'>
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                animate="show"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className=' flex flex-col gap-[25px] max-w-[510px] max-md:max-w[330px]  max-md:gap-5 max-sm:min-w-full  max-sm:gap-10'>
                <div className='flex flex-col max-sm:max-w-full gap-5 max-sm:gap-[10px]'>
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
                                    <p className='text-white font-spaceMono text-[28px] max-md:text-[22px] font-bold leading-9'><NumberAnimatd values={item.total} /></p>
                                    <h2 className='text-white font-normal text-[24px] max-md:text-base max-md:leading-6 leading-9 font-wordSans'>{item.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.5)}
                initial="hidden"
                animate="show"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }} className=''
            >
                <button onClick={() => handleNavigate('/artist')} className='w-full max-w-[510px] max-md:max-w-[330px] max-sm:min-w-full cursor-pointer'>
                    <img
                        src={require("../../../../assets/image/image1.png")}
                        alt="image1"
                        className="w-full max-xl:w-[510px] h-[401px] max-md:h-[221px] max-sm:h-[206px] max-md:w-[330px] max-sm:w-full object-fill rounded-t-[20px]"
                    />
                    <div className='bg-grey rounded-b-[20px] p-[20px]'>
                        <p className='text-white text-start font-wordSans font-semibold text-[22px] leading-8'>Space Walking</p>
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
            </motion.div>

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
                <div className='flex justify-between '>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <p className='text-white font-spaceMono text-[28px] max-md:text-[22px] font-bold leading-9'><NumberAnimatd values={item.total} /></p>
                                <h2 className='text-white font-normal text-[24px] max-md:text-base max-md:leading-6 leading-9 font-wordSans'> {item.name}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
