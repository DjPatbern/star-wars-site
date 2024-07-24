import React from "react";
import Link from "next/link";
import Image from "next/image";
import { garamond } from "@/src/utils/font";
import { excerpt } from "@/lib/utils";
import { formatDate } from "@/src/utils/formatTime";
import filmPlaceholderImg from "@/public/images/filmplaceholder.webp"

type Props = {
  film: any;
};

export const FilmCard = ({ film }: Props) => {
  return (
    <Link href={`/blog/?id=${film?.episode_id}`}>
      <div className="flex-col items-center justify-center flex py-1.5 px-1.5 rounded-xl gap-4 hover:border-[#F9F871] h-80 border-4 border-dotted border-ts-faded-purple md:mb-8">
        <div>
          <Image
            src={filmPlaceholderImg}
            alt="film thumbnail"
            width={190}
            height={114}
            className="md:max-h-[114px] md:w-auto w-full h-full"
          />
        </div>

        <div>
          <p
            className={`${garamond.className} font-semibold text-[1.37500rem] leading-6`}
          >
            {film?.title}
          </p>
        </div>
        <div>
          <p className="font-normal text-sm leading-5 text-ts-brown text-center w-4/5 m-auto">{excerpt(film?.opening_crawl, 80).replace(/<\/?p>/g, "")}</p>
        </div>
        <div>
        <p className="font-extralight text-[10px] uppercase leading-3 text-[#969696]">
            {formatDate(film?.release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
};
