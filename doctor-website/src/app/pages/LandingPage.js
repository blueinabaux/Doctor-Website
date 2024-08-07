"use client"

import Image from 'next/image';
import mikeMain from "../assets/drMikeMain.png";
import gsap from 'gsap';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

const LandingPage = () => {

    useGSAP(() => {
        let t = gsap.timeline()
        t.from(".topName", {
            y:"10vh",
            ease:"power1.inOut",
            duration:1,
            opacity:0,
            // gap:"0vw"
        })
        
        t.from(".surname", {
            y:"10vh",
            ease:"power1.inOut",
            duration:1,
            opacity:0
        })
        t.from(".imageMain", {
            y:"10vh",
            ease:"power1.inOut",
            duration:1,
            opacity:0
        },"anim")
        t.from(".topName", {
            gap:"0vw",
            ease:"power1.inOut",
            duration:0.8
        },"anim")
    },[]);
    return ( 
        <>
            <div className="landingMain h-[100vh] w-[100%] bg--600 flex justify-center items-center relative ">
                <div className="textHead h-[100%] w-[100vw] bg--600 flex flex-col justify-center items-center absolute top-0 left-0 z-[1]">
                    <div className="textCont h-[60vh] w-[100vw] bg--600 flex flex-col justify-center items-center">
                        <div className="topName h-[50%] w-[100vw] bg--500 flex justify-center items-end gap-[12vw] overflow-hidden">
                            <h1 className="text-[8vw] h-[22vh] w-[25vw] bg--500 flex justify-end items-start">DR.</h1>
                            <h1 className="text-[8vw] h-[22vh] w-[25vw] bg--500 flex justify-start items-start">MIKE</h1>
                        </div>
                        <div className="surname h-[50%] w-[100vw] bg--500 flex justify-center items-center">
                            <h1 className="text-[19vw] h-[100%] w-full bg--400 flex justify-center items-center">Varshavski</h1>
                        </div>
                    </div>
                </div>
                <div className="mainPic  h-[100%] w-[100vw] bg-transparent flex justify-center items-end absolute top-0 left-0 z-[100]">
                        {/* <Image className="h-[87%] w-[35vw]" src={mikeMain} alt="Dr. Mike" /> */}
                        <div className="imageDiv h-[90%] w-[40%] flex justify-center items-end bg--500">
                            <Image className="imageMain h-[90%] w-[35vw] object-contain bg--500" src={mikeMain} alt="Dr. Mike" />
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;