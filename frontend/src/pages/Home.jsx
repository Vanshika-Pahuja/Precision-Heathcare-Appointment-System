import React from "react";
import heroImg01 from "../assets/images/heroimg.jpg";
import heroImg02 from "../assets/images/herimg2.jpeg";
import heroImg03 from "../assets/images/heroimg3.avif";

import icon01 from "../assets/images/icon01.webp";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.jpg";



import faqImg from "../assets/images/doctor-img01.webp";

import avatarIcon from "../assets/images/avatar.jpg";
import videoIcon from "../assets/images/videoicon.webp";

import featureImg from "../assets/images/featureimg.avif";

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import About from '../components/About/About'; 
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
// import Testimonial from "../components/Testimonial/Testimonial"



const Home = () => {
  return (
    <>
      {/* =============== hero section ======= */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">Helping all the patients to live the happy and healthy life</h1>
                <p className="text__para">Healthy movement may include walking, sports, dancing, yoga, or running. Eat a well-balanced, low-fat diet with lots of fruits, vegetables, and whole grains. Choose a diet that's low in saturated fat and cholesterol, and moderate in sugar, salt, and total fat.</p>
                <button className="btn">REQUEST FOR AN APPOINTMENT</button>
              </div>
              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:flex-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"> </span>
                  <p className="text__para">YEARS OF EXPERIENCE</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:flex-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                  <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"> </span>
                  <p className="text__para">CLINIC LOCATIONS</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:flex-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"> </span>
                  <p className="text__para">PATIENT SATISFACTION</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]" justify-end>
              <div className="image-container">
                <img className="w-[350px] h-[280px] object-cover rounded-lg" src={heroImg01} alt="Hero Image 1" />
              </div>
              <div className="image-container">
                <img className="w-[350px] h-[280px] object-cover rounded-lg" src={heroImg02} alt="Hero Image 2" />
              </div>
              <div className="image-container">
                <img className="w-[350px] h-[280px] object-cover rounded-lg" src={heroImg03} alt="Hero Image 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Best Medical Treatment is provided</h2>
            <p className="text__para text-center">Best Facilities provided to Patients. Our health system is best-class with full expert health care</p>
          </div>
          <div className="flex justify-center mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 flex items-center justify-center">
              <img src={icon01} alt="" />
              <div className="ml-3">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Doctor Finding</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Best class facilities and world-class surgeons which offer expert healthcare. From Diagnosis, Treatment to Surgery.......
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-yellow-500 hover:border-none">
                  <BsArrowRight className="group-hover: text-black w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 flex items-center justify-center">
              <img src={icon02} alt="" />
              <div className="ml-3">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Best class facilities and world-class surgeons which offer expert healthcare. From Diagnosis, Treatment to Surgery.......
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-yellow-500 hover:border-none">
                  <BsArrowRight className="group-hover: text-black w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 flex items-center justify-center">
              <img src={icon03} alt="" />
              <div className="ml-3">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book a Appointment </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Best class facilities and world-class surgeons which offer expert healthcare. From Diagnosis, Treatment to Surgery.......
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-yellow-500 hover:border-none">
                  <BsArrowRight className="group-hover: text-black w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <About/>
      { /* ========= services section ============ */}

      <section> 
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Best Medical Services </h2>

            <p className="text__para text-center">
              Best Facilities available and which provide the best health efforts and expertise in health care 
            </p>
          </div>

          <ServiceList/>
        </div>
      </section>

      { /* =========== feature section ========== */}
      <section> 
        <div className="container">
          <div className="flex items-center justify-bottom flex-col lg:flex-row">


            { /* ========= feature content ======= */}

            <div className="xl:w-[670px]">
              <h2 className="heading">
                VIRTUAL TREATMENT AVAILABLE <br/> ANYTIME 
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Direct Scheduling of Appointment 
                </li>

                <li className="text__para">
                  2. Directly search for physician and contact their office 
                </li>

                <li className="text__para">
                  3. View all the surgeons and physicians who all are accepting virtual appointments and also accepting new patients , then use online appointment platform   
                </li>
              </ul>

              <Link to = "/">
                <button className="btn">
                  Learn More 
                </button>
              </Link>
            </div>


            { /* ===== feature img ===== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src = {featureImg} className="w-[400px] h-[500px]" alt = "" />

              <div className="w-[150px] lg:w-[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[200px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p  className="text-[10px] leading-[10px] lg-text-[14px] lg;leading-5  text-headingColor  font-[600] "  > Tuesday , 24  </p>


                    <p  className="text-[10px] leading-[10px] lg-text-[14px] lg;leading-5  text-headingColor  font-[600] "  > 10:00   </p>


                  </div>


                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 rounded py-1 px-[6px] lg:py-3 lg;px-[9px] ">
                    <img src = {videoIcon} alt = ""/>

                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full " >
                   Consultation  
                </div>



                <div className="flex items-center gap-[2px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img  className = "rounded-full w-[20px] " src = {avatarIcon} alt = " " />
                  <h4 className="text-[10px]leading-3 lg:text-[16px] lg:leading-[22px]   font-[300] text-headingColor" > William Trump </h4>

                
                  
                </div>

              </div>
            </div>
          </div>

          
        </div>
      </section>

      { /* ======== our great doctors ========= */ }
      <section> 
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Best Doctors  </h2>

            <p className="text__para text-center">
              Best Facilities available and which provide the best health efforts and expertise in health care 
            </p>
          </div>

         
         <DoctorList/>
          
        </div>
      </section>


      { /* ====== faq section ===== */}
      
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading"> Questioning by the patients </h2> 

              <FaqList/>

            </div>





          </div>
        </div>
      </section>

      {/* ====== faq section ===== */}

      {/* ====== testimonial start  ===== */}
      <section> 
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> What our patients say    </h2>

            <p className="text__para text-center">
              Best Facilities available and which provide the best health efforts and expertise in health care 
            </p>
          </div>

             {/* <Testimonial/>     */}
        </div>
      </section>



    </>
  );
};

export default Home;
