import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../button";
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

const dataButton = [
  {
    label: "Marketplace",
    path: "/",
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

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (values) => {
    navigate(values);
  };

  return (
    <header className="bg-black h-[100px] max-md:h-[54px] flex items-center justify-between  px-[50px] max-sm:px-[30px]">
      <button onClick={() => handleNavigate("/")} className="flex items-center cursor-pointer">
        <img
          src={require("../../assets/image/logo.png")}
          alt="logo"
          className="w-8 h-8"
        />
        <p className="gap-[10px] text-primary font-spaceMono text-[18px] font-semibold">
          NFT Marketplace
        </p>
      </button>

      <div className="hidden md:flex items-center">
        {dataButton.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleNavigate(item.path)}
              className="text-white font-wordSans font-semibold leading-[22.4px] text-center px-4 h-[46px] pointer"
            >
              {item.label}
            </button>
          );
        })}
        <Button
          icon={<CiUser size={20} color="#fff" />}
          title={"Sign Up"}
          classNameButton={"px-[30px] h-[60px]"}
          onClick={() => handleNavigate("/signup")}
        />
      </div>

      <div className="flex md:hidden items-center">
        <RiMenu2Line
          size={24}
          color="#fff"
          onClick={() => handleNavigate("/")}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
