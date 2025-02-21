import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../../../utils/common'
import { useInView } from '../../../../hook/inView'

import ANIMAL from '../../../../assets/image/animal.png'
import ANIMAL1 from '../../../../assets/image/animal1.png'
import ANIMAL2 from '../../../../assets/image/animal2.png'
import AVATAR_ANIMAL from '../../../../assets/image/avataranimal.png'
import NUMBER from '../../../../assets/image/number.png'
import AVATAR_NAM from '../../../../assets/image/Avatarnam.png'
import AVATAR_ROBOT from '../../../../assets/image/avatarrobot.png'
import NAM from '../../../../assets/image/nam.png'
import NAM2 from '../../../../assets/image/nam2.png'
import NAM3 from '../../../../assets/image/nam3.png'
import ROBOT from '../../../../assets/image/robot.png'
import ROBOT2 from '../../../../assets/image/robot2.png'
import ROBOT3 from '../../../../assets/image/robot3.png'


const data = [
    {
        name: 'MrFox',
        category: 'DSGN Animals',
        avatar: AVATAR_ANIMAL,
        image1: ANIMAL,
        image2: ANIMAL1,
        image3: ANIMAL2,
        number: NUMBER,
    },
    {
        name: 'Magic Mushrooms',
        category: 'Shroomie',
        avatar: AVATAR_NAM,
        image1: NAM,
        image2: NAM2,
        image3: NAM3,
        number: NUMBER,
    },
    {
        name: 'Disco Machines',
        category: 'BeKind2Robots',
        avatar: AVATAR_ROBOT,
        image1: ROBOT,
        image2: ROBOT2,
        image3: ROBOT3,
        number: NUMBER,
    },
]

export default function Trending() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef)
    return (
        <section ref={sectionRef} className='flex flex-col justify-between max-sm:flex-col bg-black px-[115px] max-md:px-[72px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-sm:gap-[30px] gap-[60px]'>
            <div className='flex flex-col gap-[10px] w-[60%] max-sm:w-full'>
                <h2 className=' font-semibold text-[38px] max-md:text-[28px] max-sm:text-[28px] max-sm:leading-10 leading-10 font-wordSans text-white'>Trending Collection</h2>
                <p className='text-white font-normal text-[22px] max-sm:text-base max-md:text-base font-wordSans leading-6'>Checkout our weekly updated trending collection.</p>
            </div>
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='grid gap-[30px] grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'
            >
                {data.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-[15px]'>
                            <img src={item.image1} alt="imageAnimal" className='w-full h-full rounded-[20px]' />
                            <div className='gap-[15px] grid grid-cols-3'>
                                <img src={item.image2} alt="imageAnimal1" className='w-full h-auto rounded-[20px]' />
                                <img src={item.image3} alt="imageAnimal" className='w-full h-auto rounded-[20px]' />
                                <img src={item.number} alt="imageAnimal" className='w-full h-auto rounded-[20px]' />
                            </div>
                            <div className='gap-[10px]'>
                                <p className='text-[22px] font-wordSans font-semibold leading-[30px] text-white'>DSGN Animals</p>
                                <div className='flex items-center gap-4'>
                                    <img src={item.avatar} alt="" className='w-6 h-6 rounded-full' />
                                    <p className='text-base font-normal font-wordSans leading-6 text-white'>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </section>
    )
}
