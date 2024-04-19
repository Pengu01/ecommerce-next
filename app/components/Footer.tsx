import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <>  
        <div className="relative bottom-0 w-full bg-[--rmain-color] h-18 flex py-8 px-[10vw] justify-between">
            <div className="flex flex-col text-[--main-color] text-xl">
                <p className="text-2xl">About us</p>
                <Link href={"/"}><p>Home</p></Link>
                <Link href={"/women"}><p>Women</p></Link>
                <Link href={"/men"}><p>Men</p></Link>
                <Link href={"/"}><p>Contact</p></Link>
            </div>
            <div className="flex flex-col text-[--main-color] text-xl">
                <p>Clothes shopping site powered by NextJS and Sanity</p>
            </div>
        </div>
        </>

    );
};

export default Footer;
