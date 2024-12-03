import React from 'react'

import IMAGE1 from "../../../../assets/image/maket1.png"
import IMAGE2 from "../../../../assets/image/maket2.png"
import IMAGE3 from "../../../../assets/image/maket3.png"
import IMAGE4 from "../../../../assets/image/maket4.png"
import IMAGE5 from "../../../../assets/image/maket5.png"
import IMAGE6 from "../../../../assets/image/maket6.png"
import IMAGE7 from "../../../../assets/image/maket7.png"
import IMAGE8 from "../../../../assets/image/maket8.png"
import IMAGE9 from "../../../../assets/image/maket9.png"
import IMAGE10 from "../../../../assets/image/maket10.png"
import IMAGE11 from "../../../../assets/image/maket11.png"
import IMAGE12 from "../../../../assets/image/maket12.png"
import AVATAR1 from "../../../../assets/image/avatarmaket1.png"
import AVATAR2 from "../../../../assets/image/avatarmaket2.png"
import AVATAR3 from "../../../../assets/image/avatarmaket2.png"
import AVATAR4 from "../../../../assets/image/avatarmaket4.png"
import AVATAR5 from "../../../../assets/image/avatarmaket5.png"
import AVATAR6 from "../../../../assets/image/avatarmaket6.png"
import AVATAR7 from "../../../../assets/image/avatarmaket7.png"
import AVATAR8 from "../../../../assets/image/avatarmaket8.png"
import AVATAR9 from "../../../../assets/image/avatarmaket9.png"
import AVATAR10 from "../../../../assets/image/avatarmaket10.png"
import AVATAR11 from "../../../../assets/image/avatarmaket11.png"
import AVATAR12 from "../../../../assets/image/avatarmaket12.png"
import CartItem from '../../../../components/cartItem'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        name: "Shroomie",
        avatar: AVATAR1,
        image: IMAGE1,
        category: 'Magic Mushroom 0325',
        price: 1.63,
        fluctuations: 0.,
        path: '/nft'
    },
    {
        name: "BeKind2Robots",
        avatar: AVATAR2,
        image: IMAGE2,
        category: 'Happy Robot 032',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "BeKind2Robots",
        avatar: AVATAR3,
        image: IMAGE3,
        category: 'Happy Robot 024',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Mr Fox",
        avatar: AVATAR4,
        image: IMAGE4,
        category: 'Designer Bear',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Keepitreal",
        avatar: AVATAR5,
        image: IMAGE5,
        category: 'Colorful Dog 0356',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Robotica",
        avatar: AVATAR6,
        image: IMAGE6,
        category: 'Dancing Robot 0312',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "MoonDancer",
        avatar: AVATAR7,
        image: IMAGE7,
        category: 'Cherry Blossom Girl 035',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "NebulaKid",
        avatar: AVATAR8,
        image: IMAGE8,
        category: 'Space Travel',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR9,
        image: IMAGE9,
        category: 'Sunset Dimension',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Catch 22",
        avatar: AVATAR10,
        image: IMAGE10,
        category: 'Desert Walk',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Ice Ape Club",
        avatar: AVATAR11,
        image: IMAGE11,
        category: 'IceCream Ape 0324',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "PuppyPower",
        avatar: AVATAR12,
        image: IMAGE12,
        category: 'Colorful Dog 0344',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
]


export default function Nfts() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
    return (
        <section className='pb-[80px] pt-[60px]'>
            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px]'>
                {data.map((item, index) => {
                    return (
                        <CartItem
                            key={index}
                            onClick={() => handleNavigate(item.path)}
                            image={item.image}
                            avatar={item.avatar}
                            category={item.category}
                            name={item.name}
                            price={item.price}
                            fluctuations={item.fluctuations}
                        />
                    )
                })}
            </div>
        </section>
    )
}
