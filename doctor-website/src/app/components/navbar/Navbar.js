"use client"
import Link from 'next/link'; 
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "3% 0%",
                end: "100% 100%",
                scrub: true,
                // markers: true
            }
        });

        t1.to(".navbar", {
            backdropFilter: "blur(5px)"
        });

    },[])

    return ( 
        <>
            <div className="navbar h-[14vh] w-full bg--500 flex justify-center items-center fixed top-0 left-0 z-[1000]">
                <div className="nav-left h-full w-[20%] bg--400 flex justify-center items-center">
                    <Link href="/" className="LogoText text-[2vw] text-white">Dr.Mike</Link>
                </div>
                <div className="nav-mid h-full w-[60%] bg--400 flex justify-center items-center gap-[6vw]">
                    <Link href="/about" className="text-white font-light text-[1.1vw]">About</Link>
                    <Link href="/services" className="text-white font-light text-[1.1vw]">Services</Link>
                    <Link href="/contact" className="text-white font-light text-[1.1vw]">Contact</Link>
                </div>
                <div className="nav-right h-full w-[20%] bg--400 flex justify-center items-center">
                    <button className="bookBtn h-[5.5vh] w-[7.5vw] bg-white text-[#0D4496] rounded-full text-[1vw] flex justify-center items-center ">Book</button>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;