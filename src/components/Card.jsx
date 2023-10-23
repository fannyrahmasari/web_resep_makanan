const  Card = (props) => {
    const { judul, content, image } = props

    return(
        <div className="flex gap-4 w-[300px] lg:w-[500px] lg:mr-5 shadow-lg mt-10">
            <div>
                <img src={image} alt="" className="w-[300px] lg:w-[700px]"/>
            </div>
            <div className="mr-2">
                <h1 className="font-semibold text-[12px] lg:text-[20px]">{judul}</h1>
                <p className="text-[9px] lg:text-[16px] mt-4 lg:h-28">{content}</p>
                <div className="flex mt-5">
                    <p className="mr-5 font-semibold text-[12px] lg:text-[14px]">10 <br /> Engredients </p>
                    <p className="font-semibold text-[12px] lg:text-[14px]">45 <br /> Minutes </p>
                </div>
            </div>
        </div>
    )
}

export default Card