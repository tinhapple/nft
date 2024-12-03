import React from 'react'

import AVATAR from "../../../../assets/image/avatarartist1.png"
import IMAGE1 from "../../../../assets/image/artist1.png"
import IMAGE2 from "../../../../assets/image/artist2.png"
import IMAGE3 from "../../../../assets/image/artist3.png"
import IMAGE4 from "../../../../assets/image/artist4.png"
import IMAGE5 from "../../../../assets/image/artist5.png"
import IMAGE6 from "../../../../assets/image/artist6.png"
import IMAGE7 from "../../../../assets/image/artist7.png"
import IMAGE8 from "../../../../assets/image/artist8.png"
import IMAGE9 from "../../../../assets/image/artist9.png"
import CartItem from '../../../../components/cartItem'
import { useNavigate } from 'react-router-dom'
const dataArtist = [
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE3,
        category: 'AstroFiction',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE4,
        category: 'CryptoCity',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE5,
        category: 'ColorfulDog 0524',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE6,
        category: 'Space Tales',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE7,
        category: 'Cherry Blossom Girl 037',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE8,
        category: 'Dancing Robots 0987',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE9,
        category: 'IceCream Ape ',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE1,
        category: 'Distant Galaxy',
        price: 1.63,
        fluctuations: 0.,
        path: '/nft'
    },
    {
        name: "Animakid",
        avatar: AVATAR,
        image: IMAGE2,
        category: 'Life On Edena',
        price: 1.63,
        fluctuations: 0.33,
        path: '/nft'
    },
]

export default function Owned() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('artist');
    };
  return (
    <section className='flex flex-col bg-grey px-20 gap-[30px] py-20 max-md:px-[50px] max-sm:px-[30px]'>
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px]'>
        {dataArtist.map((item, index) => {
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
                    styleFooter={'!bg-black'}
                />
            )
        })}
    </div>
</section>
  )
}
