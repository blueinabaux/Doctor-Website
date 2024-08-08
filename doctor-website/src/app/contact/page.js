"use client"

import Image from 'next/image';
import map from "../assets/mapImage.jpeg";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactPage = () => {
    return ( 
        <>
            <div className="contactMain h-[100vh] w-full bg--500 flex justify-center items-end">
                <div className="contact-cont h-[85%] w-full bg--500 flex flex-col justify-center items-center">
                    <div className="contact-top h-[15vh] w-full bg-600 flex justify-start items-center px-[4vw]">
                        <h1 className="text-[6vw]">Contact me</h1>
                    </div>
                    <div className="contactContainer h-[70vh] w-full bg--600 flex justify-start items-center px-[vw]">
                        <div className="con-left h-full w-[50%] bg--500 flex flex-col justify-center items-center">
                            <div className="locationMap h-[40vh] w-[70%] bg--600 flex justify-center items-center rounded-[1.2vw]">
                                <Image className="h-[100%] w-[100%] object-contain bg--500" src={map} alt="Dr. Mike" />
                            </div>
                            <div className="contact-info h-[22vh] w-[50%] bg--200 flex flex-col justify-center items-center gap-[0.5vw]">
                                <span className="h-[6vh] w-full flex justify-start items-center gap-[0.8vw]">
                                    <RiMapPin2Fill size={25} color='#C3DBFF' />
                                    <p className="text-[0.8vw] text-[#C3DBFF]">HealthCare Center, 123 Wellness Drive, Suite 456, Healthtown, HT 78901</p>
                                </span>
                                <span className="h-[5vh] w-full bg--400 flex justify-start items-center gap-[0.8vw]">
                                    <FaPhone size={19} color='#C3DBFF' />
                                    <p className="text-[0.8vw] text-[#C3DBFF]">Phone: (555) 123-4567</p>
                                </span>
                                <span className="h-[5vh] w-full flex justify-start items-center gap-[0.8vw]">
                                    <IoMdMail size={20} color='#C3DBFF' />
                                    <p className="text-[0.8vw] text-[#C3DBFF]">Email: contact@healthcarecenter.com</p>
                                </span>
                            </div>
                        </div>
                        <div className="con-right h-full w-[50%] bg--500 flex justify-center items-center">
                            <div className="form h-[100%] w-[60%] bg--300 flex flex-col justify-start items-center gap-[1vw]">
                                <h1 className="infoTitle text-[2.5vw]">Information</h1>
                                <div className="inputContainer h-[30vh] w-full bg--400 flex flex-col justify-evenly items-center">
                                    <input className="h-[25%] w-[90%] rounded-[0.8vw] px-[1.5vw] bg-[#2E63B2] text-white" type="text" placeholder="Full Name" />
                                    <input className="h-[25%] w-[90%] rounded-[0.8vw] px-[1.5vw] bg-[#2E63B2] text-white" type="text" placeholder="Email" />
                                </div>
                                <div className="inputContainer h-[10vh] w-full bg--400 flex flex-col justify-evenly items-center">
                                    <button className="text-[1vw] h-[6vh] w-[40%] bg-white rounded-full">Submit</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default ContactPage;