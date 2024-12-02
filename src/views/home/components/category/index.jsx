import React from "react";
import ART from "../../../../assets/image/art.png";
import COLLECTIBLES from "../../../../assets/image/Collectibles.png";
import MUSIC from "../../../../assets/image/music.png";
import PHOTO from "../../../../assets/image/photo.png";
import VIDEO from "../../../../assets/image/video.png";
import UTILITY from "../../../../assets/image/Utility.png";
import SPORT from "../../../../assets/image/sport.png";
import VIRTUAL from "../../../../assets/image/Virtual.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Art",
    image: ART,
    path: "/",
  },
  {
    name: "Collectibles",
    image: COLLECTIBLES,
    path: "/",
  },
  {
    name: "Music",
    image: MUSIC,
    path: "/",
  },
  {
    name: "Photography",
    image: PHOTO,
    path: "/",
  },
  {
    name: "Video",
    image: VIDEO,
    path: "/",
  },
  {
    name: "Utility",
    image: UTILITY,
    path: "/",
  },
  {
    name: "Sport",
    image: SPORT,
    path: "/",
  },
  {
    name: "Virtual Worlds",
    image: VIRTUAL,
    path: "/",
  },
];

export default function Category() {
    const navigate = useNavigate();

    const handleNavigate = (values) => {
        navigate(values);
    };
  return (
    <section className=" flex flex-col bg-black px-[80px] max-md:px-[50px] max-sm:px-[30px] py-[80px] max-md:py-[50px] max-sm:py-[40px] max-md:gap-[40px] max-sm:gap-[40px] gap-[60px]">
      <h2 className=" font-semibold text-[38px] max-md:text-[28px] max-sm:text-[28px] max-sm:leading-10 leading-10 font-wordSans text-white">
        Browse Categories
      </h2>
      <div className="grid grid-cols-4 gap-[30px] max-sm:grid-cols-2">
        {data.map((item, index) => {
          return (
            <button onClick={() => handleNavigate(item.path)} className="cursor-pointer">
              <img
                src={item.image}
                alt="avatar1"
                className="w-full max-h-[240px] rounded-t-[20px]"
              />
              <div className="bg-grey rounded-b-[20px]  pt-[20px] pb-[25px]">
                <p className="font-semibold text-[22px] max-md:text-base leading-6 text-white font-wordSans">
                  {item.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
