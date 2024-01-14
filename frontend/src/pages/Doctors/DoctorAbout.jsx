import React from 'react'

import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
    return (
         <div>
             <div> 
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 "> About of
            <span className="text-yellow-500 font-bold text-[24px] leading-9 "> Vanshika Pahuja </span>
            
            
             </h3>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim, provident reprehenderit totam amet soluta non quasi quisquam dolor itaque nesciunt distinctio placeat. Ratione, fuga! Eos at tempore illum perspiciatis. </p>
         </div>

         <div className="mt-12">
             <h3  className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 "> Education </h3>


             <ul className="pt-4 md:p-5"> 
             <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">

                <div> 
                    <span className="text-yellow-500 text-[15px] leading-6 font-semibold "> { formatDate ('11-04-2009')}  - { formatDate ('12-04-2012')}</span>

                    <p className="text-[16px] leading-6 font-medium "> PHD in surgery </p>

                </div>

                    <p className="text-[14px] leading-6 font-medium "> new Apollo hospital  , new york  </p>
                  
             </li>

             <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">

                <div> 
                    <span className="text-yellow-500 text-[15px] leading-6 font-semibold ">  { formatDate ('12-04-2012')}  - { formatDate ('12-04-2017')} </span>

                    <p className="text-[16px] leading-6 font-medium "> PHD in surgery </p>

                </div>

                    <p className="text-[14px] leading-6 font-medium "> new Apollo hospital , new york   </p>
                  
             </li>





             </ul>
         </div>

         <div className="mt-12 "> 
         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experience 
         </h3>

         <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className= "p-4 rounded bg-[#fff9ea]">
                <span className="text-yellow-500 text-[15px] leading-6 font-semibold ">          { formatDate ('11-04-2009')}  - { formatDate ('12-04-2012')}                 </span> 

                <p className="text-[16px] leading-6 font-medium "> Senior Surgeon </p>

                <p className="text-[16px] leading-6 font-medium "> Apollo Hospital , New York  </p>

            </li>

            <li className= "p-4 rounded bg-[#fff9ea]">
                <span className="text-yellow-500 text-[15px] leading-6 font-semibold ">          { formatDate ('11-04-2009')}  - { formatDate ('12-04-2012')}                 </span> 

                <p className="text-[16px] leading-6 font-medium "> Med.  Surgeon </p>

                <p className="text-[16px] leading-6 font-medium "> Apollo Hospital , New York  </p>

            </li>


        </ul> 


         </div>






         </div>

        
    )
}

export default DoctorAbout