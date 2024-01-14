// import React from 'react'

// const ServiceCard = ({item , index}) => {
    
//     const {name , desc , bgColor , textColor } = item
    
    
    
    
    
    
//     return (
//     <div className= "py-[30px] px-3 lg:px-5">
//         <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
//             {name}
//         </h2>
//         <p className="text-[16px] leading-7 font-[400] text-textColor mt-4"> {desc} </p> 
//     </div>
//     );
    
// }

// export default ServiceCard 



import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { BsArrowRight } from 'react-icons/bs';


const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className={`py-[30px] px-3 lg:px-5 ${bgColor}`}>
      <h2 className={`text-[26px] leading-9 font-[700] ${textColor}`}>
        {name}
      </h2>
      <p className={`text-[16px] leading-7 font-[400] mt-4 ${textColor}`}>
        {desc}
      </p>

      <div className= "flex items-center justify-bottom mt-[30px]">
        <Link 
        to = "/doctors"
        className = "w-[44px] h-[44px] rounded-full border border-solit border-[#181A1E] flex items-center justify-center group hover:bg-yellow-500 hover:border-none">
            <BsArrowRight className = "group-hover:text-black w-6 h-5"/>
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]" style = { { background: `${bgColor}` , color: `${textColor}` , borderRadius: "6px 0 0 6px" , }}> 
            {index + 1}
        </span>




      </div>











    </div>
  );
};

export default ServiceCard;
