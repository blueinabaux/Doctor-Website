
"use client"
import { useState, useEffect } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        fetch('/footerContent.json')
            .then(response => response.json())
            .then(data => setFooterData(data.footer))
            .catch(error => console.error(error));
    }, []);

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'FaUserDoctor':
                return <FaUserDoctor size={50} color="white" />;
            case 'AiFillInstagram':
                return <AiFillInstagram size={23} color="#e5efff" />;
            case 'FaTwitter':
                return <FaTwitter size={23} color="#e5efff" />;
            case 'BiLogoGmail':
                return <BiLogoGmail size={23} color="#e5efff" />;
            default:
                return null;
        }
    };

    console.log(footerData);

    return footerData ? (
        <>
            <div className="footerMain bg-[#0D4496] h-[65vh] w-full flex justify-center items-center">
                <div className="foot-left h-[100%] w-[40%] bg--500 flex justify-center items-center">
                    <div className="leftContFoot h-[60%] w-[60%] bg--500">
                        <div className="logoHead h-[80%] w-full bg--400 flex flex-col justify-end items-center">
                            {renderIcon(footerData.logo.icon)}
                            <h1 className="text-[5vw]" style={{ color: footerData.logo.color }}>{footerData.logo.text}</h1>
                        </div>
                        <div className="links bg--500 h-[20%] w-full flex justify-center items-start py-[0vw] gap-[1vw]">
                            {footerData.socialLinks.map((link, index) => (
                                <a key={index} href={link.url} >
                                    {renderIcon(link.icon)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="foot-right h-[100%] w-[60%] bg--500 flex justify-between items-center">
                    {footerData.usefulLinks.map((section, index) => (
                        <div key={index} className="useful h-[40%] w-[30%] bg--50">
                            <div className="topLink h-[20%] w-full bg--400 flex justify-start items-center">
                                <h1 className="text-[2.5vw]">{section.title}</h1>
                            </div>
                            <div className="allLinks h-[80%] w-full flex flex-col justify-start items-start">
                                {section.links.map((link, idx) => (
                                    <h2 key={idx} className="text-[1.3vw]">{link}</h2>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ) : null;
};

export default Footer;
