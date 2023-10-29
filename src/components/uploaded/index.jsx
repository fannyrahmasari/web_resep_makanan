import React from "react";

const Upload = ({img, ...rest}) => {
    return(
        <div className="Upload">
            {img && <img className="preview" src={img} alt="" />}
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload