"use client"
import Image from 'next/image';
import mikeMain2 from "../assets/drMike2Main.png";
import { useState } from 'react';
import InfoPage from './optionPages/InfoPage';
import ExpertisePage from './optionPages/ExpertisePage';
import ExpPage from './optionPages/ExpPage';


const AboutPage = () => {

    const [selectedPageId, setSelectedPageId] = useState(1); // Default to InfoPage

    const optionPages = [
        {
            id: 1,
            page: <InfoPage />
        },
        {
            id: 2,
            page: <ExpPage />
        },
        {
            id: 3,
            page: <ExpertisePage />
        },
    ];

    const handleSelectChange = (e) => {
        const id = parseInt(e.target.value);
        setSelectedPageId(id);
    };

    const disPage = optionPages.find(page => page.id === selectedPageId)?.page;

    return ( 
        <>
            <div className="aboutMain h-[100vh] w-[100vw] bg--500 flex justify-center items-center">
                <div className="about-left h-full w-[55%] bg--500 flex flex-col justify-end py-[1vh] items-center px-[5vw]">
                    <div className="aboutTitle h-[15vh] w-[100%] bg--500">
                        <h1 className="text-[7.5vw] h-full w-full flex justify-start items-center">ABOUT</h1>
                    </div>
                    <div className="options h-[8vh] w-[100%] bg--500  flex justify-start items-center">
                    <select
                            className="h-[63%] w-[12vw] rounded-full bg-white px-[1.5vw] text-[#0D4496] text-[1.1vw]"
                            onChange={handleSelectChange}
                            value={selectedPageId}
                        >
                            <option value={1}>Info</option>
                            <option value={2}>Experience</option>
                            <option value={3}>Expertise</option>
                        </select>
                    </div>
                    <div className="optionDisplay h-[55vh] w-full bg--600">
                        {disPage}
                    </div>
                </div>
                <div className="about-right h-full w-[45%] bg--500 flex justify-center items-end">
                    <div className="imageDiv h-[85%] w-[100%] flex justify-center items-end bg--500">
                        <Image className="h-[100%] w-[35vw] object-contain bg--500" src={mikeMain2} alt="Dr. Mike" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutPage;