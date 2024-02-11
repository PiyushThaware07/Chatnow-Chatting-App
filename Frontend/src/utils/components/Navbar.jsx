import React from 'react';
// & RRD ==================================================================
import { Link } from "react-router-dom";
// ! COLOR Palette =======================================================
import { bgColorPalette, textColorPalette } from "../tools/colorPalette";
// ~ ICONS ================================================================
import { BsChatSquareHeart } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsChatRightHeart } from "react-icons/bs";



export default function Navbar() {

    return (
        <>
            <div className={`navbar px-5 sm:px-8 py-4 sm:py-5 sticky top-0 left-0 z-40 bg-white shadow-sm`}>
                <nav className='flex flex-nowrap items-center justify-between'>
                    <div className={`logo flex items-center gap-1 text-xl font-bold cursor-pointer ${textColorPalette.secondaryColor}`}>
                        <BsChatRightHeart className={`${textColorPalette.secondaryColor}`} />
                        <h1><span>Chat</span><span className={`${textColorPalette.primaryColor} font-semibold`}>now</span></h1>
                    </div>
                    <div className="links">
                        <ul className='flex flex-nowrap items-center justify-end gap-2'>
                            <li><a href="https://piyushthaware.vercel.app/" target='_blank' className={`${bgColorPalette.secondaryColor} text-white px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-sm font-semibold`}>My Portfolio</a></li>
                            <li><Link to="/auth/signup" className={`${bgColorPalette.primaryColor} text-white px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-sm font-semibold`}>Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <div className={`bg-slate-100 hidden sm:flex items-center justify-center gap-3 px-5 py-3`}> */}
            <div className={`bg-slate-100 hidden items-center justify-center gap-3 px-5 py-3`}>
                <h1 className={`text-sm ${textColorPalette.secondaryColor} font-medium`}>Connecting Conversations, One Chat at a Time.</h1>
                <button className={`capitalize text-[12px] font-medium bg-white text- px-5 py-1 rounded-full inline-flex items-center gap-1`}>find people <IoIosArrowRoundForward className='text-xl' /></button>
            </div>
        </>
    )
}
