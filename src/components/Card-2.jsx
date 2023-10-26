const Card2 = (props) => {
    const { image, judul, content, onClick = () => {} } = props

    return(
           <div className="max-w-sm lg:w-[300px] w-[200px] lg:h-[420px] rounded overflow-hidden shadow-lg">
            <img src={image} alt="" className="w-full h-[200px]" />
            <div className="px-6 py-4" onClick={onClick}>
                <div className="font-bold text-[12px] lg:text-[14px] mb-2">{judul}</div>
                <p className="text-gray-700 text-[10px] lg:text-[15px]">
                {content}
                </p>
            </div>
            </div>
    )
}

export default Card2