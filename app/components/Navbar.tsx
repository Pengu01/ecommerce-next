"use client"

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    
    const [menOpen, setMenOpen] = useState(false);
    const [womenOpen, setWomenOpen] = useState(false);

    const toggleMenTrue = () => {
        if(menOpen == true)
        {
            return;
        }
        setMenOpen(true);
        toggleWomenFalse();
    };

    const toggleWomenTrue = () => {
        if(womenOpen == true)
        {
            return;
        }
        setWomenOpen(true);
        toggleMenFalse();
    };

    const toggleWomenFalse = () => {
        setWomenOpen(false);
    };

    const toggleMenFalse = () => {
        setMenOpen(false);
    };

    return (
        <>  
        <div className={`ease-in-out duration-1000 transition-all w-full flex justify-center fixed z-30 ${menOpen || womenOpen ? 'top-0' : 'md:top-[calc(50%-34px)] top-[calc(50%-26px)]'}`}>
            <div className={`flex justify-between gap-8 ease-in-out duration-1000 delay-1000 bg-top transition-all bg-gradient-to-t from-[--rmain-color] to-[--rmain-color] bg-no-repeat ${menOpen || womenOpen ? 'w-full bg-[length:100%_100%]' : 'md:w-[313.17px] w-[222.13px] bg-[length:100%_0%]'}`}>
            <Link href={"/men"}><p className={`inline-block text-2xl border-2 border-[--rmain-color] py-2 px-3 bg-gradient-to-l from-[--rmain-color] to-[--main-color] from-50% to-50% md:text-4xl md:border-3 md:py-3 md:px-[18px] bg-[length:200%] transition-all duration-500 ease ${menOpen ? 'text-[--main-color] bg-right cursor-default' : 'hover:text-[--main-color] hover:bg-right cursor-pointer bg-left text-[--rmain-color] '}`} onClick={toggleMenTrue}>Men</p></Link>
            <Link href={"/women"}><p className={`inline-block text-2xl border-2 border-[--rmain-color] py-2 px-3 bg-gradient-to-r from-[--rmain-color] to-[--main-color] from-50% to-50% md:text-4xl md:border-3 md:py-3 md:px-[18px] bg-[length:200%] transition-all duration-500 ease ${womenOpen ? 'text-[--main-color] bg-left cursor-default' : 'hover:text-[--main-color] hover:bg-left cursor-pointer bg-right text-[--rmain-color] '}`} onClick={toggleWomenTrue}>Women</p></Link>
            </div>
        </div>
        </>

    );
};

export default Navbar;
