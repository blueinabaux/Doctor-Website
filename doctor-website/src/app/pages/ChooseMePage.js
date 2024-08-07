"use client"
import { useEffect } from "react";
import { useRef } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import gsap from "gsap";

const ChooseMePage = () => {
    const cardRefs = useRef([]);

    const handleMouseEnter = (index) => {
        gsap.to(cardRefs.current[index].querySelector(".serviceCard"), {
            backgroundColor: "#e5efff",
            color: "#2E63B2",
            duration: 0.3
        });
        gsap.to(cardRefs.current[index].querySelector(".serviceIcon div"), {
            color: "#0D4496",
            duration: 0.3
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(cardRefs.current[index].querySelector(".serviceCard"), {
            backgroundColor: "#2E63B2",
            color: "white",
            duration: 0.3
        });
        gsap.to(cardRefs.current[index].querySelector(".serviceIcon div"), {
            color: "white",
            duration: 0.3
        });
    };


    const choice = [
        {
            id: 1,
            name: "Comprehensive Expertise",
            icon: <BsPersonFillAdd />,
            iconStyle: { fontSize: '5vw', color: 'white' }
        },
        {
            id: 2,
            name: "Compassionate Care",
            icon: <FaHandHoldingHeart />,
            iconStyle: { fontSize: '5vw', color: 'white' }
        },
        {
            id: 3,
            name: "Extensive Experience",
            icon: <FaUserDoctor />,
            iconStyle: { fontSize: '5vw', color: 'white' }
        },
    ];

    useEffect(() => {
        // Add any additional setup here if needed
    }, []);

    return (
        <>
            <div className="chooseMain h-[110vh] w-full bg--500 flex justify-center items-end ">
                <div className="choose-box h-[90%] w-full bg--500 flex flex-col justify-center items-center">
                    <div className="choose-top h-[20vh] w-full bg--600 flex justify-start items-center px-[4vw]">
                        <h1 className="text-[6vw]">Why Choose Me ?</h1>
                    </div>
                    <div className="choose-cont h-[70vh] w-[100vw] bg--600 flex justify-center items-center ">
                        <div className="ser-left h-full w-[100%] bg--500 flex justify-center items-center gap-[7vw]">
                            {
                                choice.map((item, index) => (
                                    <div
                                        key={item.id}
                                        ref={el => cardRefs.current[index] = el}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={() => handleMouseLeave(index)}
                                        className="serviceCard h-[58vh] w-[25%] bg-[#2E63B2] flex flex-col justify-center items-center rounded-[1.5vw]"
                                    >
                                        <div className="serviceIcon h-[50%] w-[100%] rounded-[1.5vw] flex justify-center items-end">
                                            <div style={item.iconStyle}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="serviceName h-[50%] w-[80%] bg--500 rounded-[1.5vw] flex justify-center items-center">
                                            <h1 className="text-[2.2vw] text-center">{item.name}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseMePage;
