import React, { useState } from "react";
import hamburgerIconDark from "@/public/svg/icon_hamburgerDark.svg";
import cancel from "@/public/svg/close.svg";
import Image from "next/image";
import { Drawer } from "@/app/common/Drawer";
import Link from "next/link";
import Profile from "./Profile";
import { links } from "@/src/data";

const PhoneHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex gap-5 w-full mr-4">
          <Image
            priority
            src={hamburgerIconDark}
            className="cursor-pointer"
            alt="icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <div className="p-5 w-full">
            <div className="flex justify-end cursor-pointer">
              <Image
                src={cancel}
                onClick={() => setIsOpen(!isOpen)}
                width={30}
                height={30}
                alt="cancel"
                priority
              />
            </div>
            <div className="w-full my-5">
              {links.map((link, index) => (
                <div className="w-full my-1" key={index}>
                  <div className="w-full text-[#F9F871] cursor-pointer bg-ts-purple  hover:text-ts-light-white hover:bg-ts-faded-purple py-2 px-4 rounded font-medium text-lg">
                    <Link
                      href={link.href}
                      className="w-full"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <p className="w-full">{link.name}</p>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="block md:hidden mt-5">
                <Profile />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default PhoneHamburger;
