import React from "react";

const Error = ({errMessage}) => {
    return <div className="flex items-center jusitfy-center w-full h-full">
        <h3 className="text-yellow-500 text-[20px] leading-[30px] font-semibold "> {errMessage} </h3>
    </div>
}


export default Error 