import card from "../assets/img/card-1.png"
const  Card = (props) => {
    const { judul="Es Selendang Mayang", content="Es selendang mayang isinya mirip seperti puding atau kue lapis yang terbuat dari tepung sagu ..." } = props

    return(
        <div className="flex gap-4 w-[300px] lg:w-[400px] lg:mr-5 shadow-lg mt-10">
            <div>
                <img src={card} alt="" className="w-[300px] lg:w-[400px]"/>
            </div>
            <div className="mr-2">
                <h1 className="font-semibold text-[12px] lg:text-[18px]">{judul}</h1>
                <p className="text-[9px] lg:text-[15px] mt-2">{content}</p>
                <div className="flex mt-5">
                    <p className="mr-5 font-semibold text-[12px] lg:text-[15px]">10 <br /> Engredients </p>
                    <p className="font-semibold text-[12px] lg:text-[15px]">45 <br /> Minutes </p>
                </div>
            </div>
        </div>
    )
}

export default Card