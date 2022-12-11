import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Category = ({ title }: { title: string }) => {
  const { pathname } = useRouter();
  return (
    <NextLink href={`/${pathname}/${title}`}>
      <div className="flex flex-col justify-center items-center mb-5 hover:cursor-pointer hover:opacity-90">
        <img
          className="w-28 h-28 bg-white rounded-full p-2 hover:p-1 transition-all"
          src="https://www.helsam.dk/-/media/helsam-dk/kategori-billeder/sundhed/boern-kategori.png"
        ></img>
        <h1 className="font-semibold">{title}</h1>
      </div>
    </NextLink>
  );
};

export default Category;
