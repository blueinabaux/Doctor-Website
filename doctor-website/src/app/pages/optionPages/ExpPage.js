const ExpPage = () => {
    const exp = [
        {
            id:1,
            expert:"Over 15 Years in the Medical Field"
        },
        {
            id:2,
            expert:"Patient-Centered Care Models"
        },
        {
            id:3,
            expert:"Research Contributions"
        },
    ]
    return ( 
        <>
            <div className="expMain h-full w-full bg--300 flex flex-col justify-center items-center gap-[3vw]">
                {exp.map((item) => {
                    return(
                        <>
                            <div className="infoBlock h-auto w-[70%] bg-[#2E63B2] flex justify-center items-center p-[1vw] rounded-[0.8vw]">
                                <h1 className=" text-blue-100 text-[1.4vw]">{item.expert}</h1>
                            </div>
                        </>
                    );
                    
                })}
                
            </div>
        </>
     );
}
 
export default ExpPage;