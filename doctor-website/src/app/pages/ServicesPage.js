import { useState, useEffect } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { FaPersonCane } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiMentalHealthFill } from "react-icons/ri";

const Servicespage = () => {
    const [servicesData, setServicesData] = useState(null);

    useEffect(() => {
        fetch('/servicesContent.json')
            .then(response => response.json())
            .then(data => setServicesData(data.services))
            .catch(error => console.error('Error loading services content:', error));
    }, []);

    const renderIcon = (index) => {
        const icons = [
            <FaHeartbeat />,
            <RiHospitalFill />,
            <FaPersonCane size={30} />,
            <RiGraduationCapFill />,
            <RiMentalHealthFill />
        ];
        return icons[index] || null;
    };

    return servicesData ? (
        <div className="serviceMain h-[100vh] w-full bg--500 flex justify-center items-end ">
            <div className="servicesAll h-[90%] w-full bg--500 flex flex-col justify-center items-center">
                <div className="services-top h-[20vh] w-full bg--600 flex justify-start items-center px-[5vw]">
                    <h1 className="text-[6vw] ">SERVICES</h1>
                </div>
                <div className="services-cont h-[70vh] w-[100vw] bg--600 flex justify-start items-center ">
                    <div className="ser-left h-full w-[50%] bg--500 flex flex-col justify-center items-center gap-[4vw]">
                        {servicesData.slice(0, 3).map((item, index) => (
                            <div key={item.id} className="service h-[19%] w-[62%] bg-[#2E63B2] flex justify-center items-center rounded-[1.5vw]">
                                <div className="serviceIcon h-[100%] w-[25%] rounded-[1.5vw] flex justify-center items-center" style={{ backgroundColor: item.bgColor }}>
                                    <div style={item.iconStyle}>
                                        {renderIcon(index)}
                                    </div>
                                </div>
                                <div className="serviceName h-[100%] w-[75%] bg--500 rounded-[1.5vw] flex justify-center items-center">
                                    <h1 className="text-[1.8vw]">{item.service}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ser-right h-full w-[50%] flex flex-col justify-center items-center gap-[4vw]">
                        {servicesData.slice(3).map((item, index) => (
                            <div key={item.id} className="service h-[19%] w-[62%] bg-[#2E63B2] flex justify-center items-center rounded-[1.5vw]">
                                <div className="serviceIcon h-[100%] w-[25%] rounded-[1.5vw] flex justify-center items-center" style={{ backgroundColor: item.bgColor }}>
                                    <div style={item.iconStyle}>
                                        {renderIcon(index + 3)}
                                    </div>
                                </div>
                                <div className="serviceName h-[100%] w-[78%] bg--500 rounded-[1.5vw] flex justify-center items-center">
                                    <h1 className="text-[1.8vw]">{item.service}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Servicespage;
