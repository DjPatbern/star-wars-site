import React from "react";
import Link from "next/link";
import Image from "next/image";
import { garamond } from "@/src/utils/font";
import { excerpt } from "@/lib/utils";
import { formatDate } from "@/src/utils/formatTime";

type Props = {
  blog: any;
  isMatchRoute?: boolean;
};

export const BlogCard = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog?.node?.slug}`}>
      <div className="flex-col flex py-1.5 px-1.5 rounded gap-4 hover:border-ts-green md:mb-8">
        <div>
          <Image
            src={blog?.node?.featuredImage?.node?.sourceUrl}
            alt="image"
            width={190}
            height={114}
            className="md:max-h-[114px] md:w-auto w-full h-full"
          />
        </div>

        <div>
          <p
            className={`${garamond.className} font-semibold text-[1.37500rem] leading-6`}
          >
            {blog?.node?.title}
          </p>
        </div>
        <div>
          <p className="font-normal text-sm leading-5 text-ts-brown">{excerpt(blog.node.excerpt, 80).replace(/<\/?p>/g, "")}</p>
        </div>
        <div>
        <p className="font-extralight text-[10px] uppercase leading-3 text-[#969696]">
            {formatDate(blog?.node?.date)}
          </p>
        </div>
      </div>
    </Link>
  );
};
