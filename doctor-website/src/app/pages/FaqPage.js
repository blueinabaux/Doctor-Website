"use client"
import gsap from "gsap";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleQuestionClick = (index) => {
        // Collapse the previously active item
        if (activeIndex !== null && activeIndex !== index) {
            gsap.to(`#faq-${activeIndex}`, {
                height: "12vh", // Collapsed height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${activeIndex} .answer`, {
                height: "0", // Collapsed height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${activeIndex} .arrowIcon`, {
                rotate: "0deg",
                ease: "power1.inOut",
                duration: 0.6
            });
        }

        // Expand the clicked item or collapse if it's already active
        if (activeIndex === index) {
            gsap.to(`#faq-${index}`, {
                height: "12vh", // Collapsed height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${index} .answer`, {
                height: "0", // Collapsed height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${index} .arrowIcon`, {
                rotate: "0deg",
                ease: "power1.inOut",
                duration: 0.6
            });
            setActiveIndex(null); // Reset the active index
        } else {
            gsap.to(`#faq-${index}`, {
                height: "25vh", // Expanded height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${index} .answer`, {
                height: "15vh", // Expanded height
                ease: "power1.inOut",
                duration: 0.6
            });
            gsap.to(`#faq-${index} .arrowIcon`, {
                rotate: "90deg",
                ease: "power1.inOut",
                duration: 0.6
            });

            setActiveIndex(index); // Set the clicked index as active
        }
    }

    const faqArr = [
        {
            id: 1,
            ques: "What types of services does Dr. Mike Varshavski  offer?",
            ans: "Dr. Mike Varshavski  provides comprehensive care in internal medicine, geriatrics, and cardiology. This includes routine check-ups, chronic disease management, specialized heart care, and age-related health services.",
        },
        {
            id: 2,
            ques: "How can I schedule an appointment with Dr. Varshavski ?",
            ans: "You can schedule an appointment by calling our office directly or using our online booking system. If you're a new patient, please provide your medical history and insurance information beforehand.",
        },
        {
            id: 3,
            ques: "What should I bring to my first appointment?",
            ans: "Please bring a valid ID, your insurance card, and any relevant medical records or medications you're currently taking. If you have previous lab results or imaging, bring those as well.",
        },
        {
            id: 4,
            ques: "What if I need to cancel or reschedule my appointment?",
            ans: "If you need to cancel or reschedule, please notify us at least 24 hours in advance to avoid any cancellation fees and to help us accommodate other patients.",
        },
        // Add more FAQ items as needed
    ];

    return ( 
        <>
            <div className="faqMain min-h-[100vh] w-full bg--500 flex justify-center items-end">
                <div className="faq-cont h-[95%] w-full bg--500 flex flex-col justify-center items-center">
                    <div className="faq-top h-[15vh] w-full bg--600 flex justify-start items-center px-[4vw]">
                        <h1 className="text-[7vw]">FAQ</h1>
                    </div>
                    <div className="faq-questions h-[75vh] w-full bg--600 flex flex-col justify-center items-center gap-[1.8vw] px-[4vw]">
                        {
                            faqArr.map((item) => (
                                <div
                                    key={item.id}
                                    id={`faq-${item.id}`}
                                    onClick={() => handleQuestionClick(item.id)}
                                    className={`faq-questions h-[12vh] w-[90%] bg-[#2E63B2] flex flex-col justify-start items-center rounded-[1.5vw] relative px-[4vw] ${activeIndex === item.id ? 'active' : ''}`}
                                >
                                    <div className="question h-[12vh] w-[95%] bg-[#2E63B2] flex justify-between items-center absolute z-[10]">
                                        <h1 className="text-[1.6vw]">{item.ques}</h1>
                                        <IoIosArrowForward className="arrowIcon" size={30} color="white" />
                                    </div>
                                    {activeIndex === item.id && (
                                        <div className="answer h-[80%] w-[95%] bg--400 flex justify-center items-end absolute top-0 z-[5]">
                                            <h2 className="text-white">{item.ans}</h2>
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqPage;
