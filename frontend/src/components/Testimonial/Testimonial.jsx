// import React from 'react'


// import {Pagination } from 'swiper'

// import {Swiper , SwiperSlide} from 'swiper/react'


// import SwiperCore, { Pagination } from 'swiper/core';

// import 'swiper/swiper-bundle.css';

// import 'swiper/css'
// import 'swiper/css/pagination'
// import patientAvatar from '../../assets/images/patient-avatar.jpeg'

// import { HiStar } from 'react-icons/hi';
// SwiperCore.use([Pagination]);

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination } from 'swiper/core';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import patientAvatar from '../../assets/images/patient-avatar.jpeg';
// import { HiStar } from 'react-icons/hi';

// SwiperCore.use([Pagination]);




// const Testimonial = () => {
//     return (
//         <div className='mt-[30px] lg:mt-[55px] '>
//             <Swiper modules = { [Pagination]} spaceBetween={30} 
//             slidesPerView = {1} 
//             pagination = { {clickable :true}} breakpoints = {{
                
//                     640: {
//                         slidesPerView : 1, 
//                         spaceBetween: 0,
//                     }, 

//                     768: {
//                         slidesPerView : 2, 
//                         spaceBetween: 20,
//                     }, 

//                     1024 : {
//                         slidesPerView : 3, 
//                         spaceBetween: 30,
//                     },
                

//             }}>

//                 <SwiperSlide>
//                     <div className="py-[30px] px-5 rounded-3">
//                         <div className="flex items-center gap-[13px] ">
//                             <img src = {patientAvatar} alt = ""/>
//                             <div >
//                                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor "> Muhibar  </h4>

//                                 <div className="flex items-center gap-[2px]">
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>

//                                 </div>
//                             </div>
//                         </div>


//                         <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] "> 
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore assumenda, est vero reiciendis saepe perspiciatis voluptas cumque doloribus asperiores laudantium fugiat quasi rem voluptatum quisquam consequatur optio nihil harum?
//                         </p>
//                     </div>
//                 </SwiperSlide>




//                 <SwiperSlide>
//                     <div className="py-[30px] px-5 rounded-3">
//                         <div className="flex items-center gap-[13px] ">
//                             <img src = {patientAvatar} alt = ""/>
//                             <div >
//                                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor "> Muhibar  </h4>

//                                 <div className="flex items-center gap-[2px]">
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>
//                                     <HiStar className = "text-yellow-500 w-[18px] h-5 "/>

//                                 </div>
//                             </div>
//                         </div>


//                         <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] "> 
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus labore assumenda, est vero reiciendis saepe perspiciatis voluptas cumque doloribus asperiores laudantium fugiat quasi rem voluptatum quisquam consequatur optio nihil harum?
//                         </p>
//                     </div>
//                 </SwiperSlide>

//             </Swiper>
//         </div> 
//     )
// }


// export default Testimonial;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore , {Pagination} from 'swiper/core';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/pagination';
// import patientAvatar from '../../assets/images/patient-avatar.jpeg';
// import { HiStar } from 'react-icons/hi';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.jpeg';
import { HiStar } from 'react-icons/hi';

SwiperCore.use([Pagination]);


SwiperCore.use([Pagination]);

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] '>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Muhibar
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              labore assumenda, est vero reiciendis saepe perspiciatis voluptas
              cumque doloribus asperiores laudantium fugiat quasi rem voluptatum
              quisquam consequatur optio nihil harum?
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Muhibar
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                  <HiStar className="text-yellow-500 w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              labore assumenda, est vero reiciendis saepe perspiciatis voluptas
              cumque doloribus asperiores laudantium fugiat quasi rem voluptatum
              quisquam consequatur optio nihil harum?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
