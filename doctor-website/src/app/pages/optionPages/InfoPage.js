const InfoPage = () => {
    return ( 
        <>
            <div className="infoMain h-full w-full bg--300 flex justify-center items-start py-[2vw]">
                <div className="infoBlock h-auto w-full bg-[#2E63B2] flex flex-col justify-center items-center gap-[1.5vw] p-[2vw] rounded-[1.5vw] overflow-scroll">
                        <p className="text-blue-100 text-[1vw]">Dr. Mike Varshavski graduated with honors from Harvard Medical School and completed his residency in Internal Medicine at Johns Hopkins Hospital. His dedication to patient care and continual learning led him to pursue a fellowship in Geriatrics and Cardiology.</p>
                        <p className="text-blue-100 text-[1vw]">Dr. Varshavski's dedication to patient care and continual learning led him to pursue fellowships in both Geriatrics and Cardiology. His training in Geriatrics has equipped him with specialized knowledge in the care of elderly patients, focusing on managing age-related conditions and improving their quality of life. In Cardiology, he gained advanced expertise in diagnosing and treating complex heart conditions, including hypertension and arrhythmias.</p>
                    
                </div>
            </div>
        </>
     );
}
 
export default InfoPage;