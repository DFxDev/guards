import React, { useState, useEffect } from "react";

import security1 from "../assets/images/imagess/security1.jpg";
import security2 from "../assets/images/imagess/security2.jpg";
import security3 from "../assets/images/imagess/security3.jpg";
import security4 from "../assets/images/imagess/security4.jpg";
import art1 from "../assets/images/imagess/art1.jpg";

import housescaledown from "../assets/images/imagess/housescaledown.png";
import locationscaledown2 from "../assets/images/imagess/locationscaledown2.jpg";
import bookingscaledown from "../assets/images/imagess/bookingscaledown.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import placeholder from '../assets/images/imagess/placeholder.jpg'
import GuardsList from "../components/GuardSecurity/GuardsList";
import Testimonial from "../components/Testimonial/Testimonial";
import FaqList from "../components/Faq/FaqList";

import ProgressBar from "../components/ProgressBar/ProgressBar";
import 'react-circular-progressbar/dist/styles.css';



const Home = () => {
  const [percentage1, setPercentage1] = useState(0); // Start from 0
  const [percentage2, setPercentage2] = useState(0); // Start from 0

  useEffect(() => {
    if (percentage1 < 100) {
      const timer1 = setTimeout(() => {
        setPercentage1(percentage1 + 1);
      }, 40);
      return () => clearTimeout(timer1);
    }
  }, [percentage1]);

  useEffect(() => {
    if (percentage2 < 80) {
      const timer2 = setTimeout(() => {
        setPercentage2(percentage2 + 1);
      }, 40);
      return () => clearTimeout(timer2);
    }
  }, [percentage2]);
  // const percentage1 = 100;
  // const percentage2 =80;
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content1 */}
            {/* <div className="container"> */}
              <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help secure properties and buildings.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis .
                </p>
                <button className="btn bg-sky-500 hover:bg-sky-700 ..."> Request for a guard </button>
              </div>
             

              {/* Hero Content2 */}
               <div className="grid justify-center justify-items-center">
               <div className="mt-[38px] lg:mt[70px] lg:flex flex-row lg:flex-row lg:items-center lg:text-center gap-14 lg:gap-[30px]">
                <div>
              
                  <span  className="w-[100] h2 mt-[-14px]"> 

                   <ProgressBar percentage={percentage2} /> 

                   </span>
                 
                 
                  <p className="text__para ml-7 lg:ml-5 lg:mr-10">Years of Experience </p>
                </div>

                <div>
              
                  <span className="w-[100] h2  mt-[-14px]">  
                   <ProgressBar percentage={percentage1} /> 
                   </span>
               
                  <p className="text__para ml-4 ">Customer Satisfaction </p>
                </div>
               </div>

               </div>


              </div>

            {/* Hero img content3 */}
            <div className="flex gap-[20px] justify-end aspect-square md:mb-[-10rem] lg:mb-[-1.5rem] ">
              <div className="md:pb-60  ">
                <img className="w-full  mb-[16px] md:-mb-[-22px] lg-[30px]" src={security3} alt="img" />
                <img className="w-full " src={security1} alt="img" />
              </div>
              <div className=" ">
                <img className="w-full   mb-[4px]" src={security2} alt="img" />
                <div className=" overflow-hidden sm:h-[22rem] md:h-[22.4rem] lg:h-[18.2rem]">
                <img className="w-full  " src={security4} alt="img" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      <section>
        <div className="container  ">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center ">
              Prividing the best security Services
            </h2>
            <p className="text__para text-center">
              World-class security for everyone. Our security System offers the
              best security guards and officers according to your need.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                          gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src={housescaledown} alt="image"  />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a guard
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class security for everyone. Our experienced Security
                  guards provide the best security experience.
                </p>

                <Link
                  to="/guards"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                                    border-[#181A1E] mt-[30px] mx-auto flex items-center  
                                     justify-center group hover:bg-sky-600 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div> 
            </div>
            <div className="py-[0px] px-5">
              <div className="flex items-center justify-center  sm:mt-0 md:mt-80 lg:mt-0 xl:mt-0 2xl:mt-0">
                <img src={locationscaledown2} alt="image" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class security for everyone. Our experienced Security
                  guards provide the best security experience.
                </p>

                <Link
                  to="/guards"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                                    border-[#181A1E] mt-[30px] mx-auto flex items-center  
                                     justify-center group hover:bg-sky-600 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
              {/* object-scale-down h-48 w-36 moveleft moveright */}
                <img  src={bookingscaledown} alt="image"  />
              </div>

              <div className="mt-[30px] pt-[22px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book a guard
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class security for everyone. Our experienced Security
                  guards provide the best security experience.
                </p>

                <Link
                  to="/guards"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                                    border-[#181A1E] mt-[30px] mx-auto flex items-center  
                                     justify-center group hover:bg-sky-600 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
         {/* About Section */}
           <About />

         {/* About Section End */}
          {/* Services Section */}
          <section>
             <div className="container">
              <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center"> 
                  Our Security Services
                </h2>
                <p className="text__para text-center">
                  Our guard and officers provide World-class security which is unmatched
                   by other security outfit
                </p>

              </div>

                 <ServiceList />
             </div>
          </section>
           {/* Services Section End */}
           {/* Feature Section */}
           <section>
            <div className="container">
              <div className="flex items-center justify-between flex-col lg:flex-row">

                {/* feature content */}
                <div className="xl:w-[670px] ml-2">
                <h2 className="heading  text-cyan-400">
                    Do You need security cover? <br /> or new security Guard?. 
                  </h2>
                  <div className="border-2 border-solid border-grey-500"></div>
                  <h2 className="heading">
                    Contact guards directly  <br /> anytime.
                  </h2>
                  <ul className="pl-4">
                    
                    <li className="text__para">
                      1. Search for you security guards here.
                    </li>

                    <li className="text__para">
                      2.  View all security guards who are available for work. 
                     
                    </li>
                     <li className="text__para">
                      3.   Use the scheduling tool to select the days you need a guard.
                     </li>
                     <li className="text__para">
                      4.   Agree on a qoute and work contract
                     </li>

                  </ul>
                   <Link to="/">
                    <button className="btn  bg-sky-500 hover:bg-sky-700 ...">Learn More</button>
                   </Link>
                </div>
                   {/* Fearture image */}
                   <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                    <img src={art1} alt="" className="w-3/4 mr-16 md:mr-32 "/>
                    
                    {/* <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
                                    md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px] "
                    >
                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-[6px] lg:gap-3">
                          <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5
                                        text-headingColor font-[600]"
                          > 
                              Tue, 26
                          </p>
                          <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5
                                        text-headingColor font-[400]"
                          > 
                              11.00AM
                          </p>
                        </div>
                          <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor
                                           rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                          >
                            <img src={videoIcon} alt='' />

                          </span>
                      </div>
                      <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] 
                                     leading-[8px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                      >
                       Availability
                      </div>
                      <div  className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                        <img src={placeholder} alt='' className="rounded-full h-6"/>
                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                          Olawale Orija
                        </h4>
                      </div>
                    </div> */}


                   </div>
              </div>
            </div>
           </section>
           {/* Feature Section End */}
           {/* Our guards Section */}
             <section>
              <div className="container">
                <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center"> Our Security guards</h2>
                  <p className="text__para text-center">
                  World-class security for all businesses. 
                  Our SIA Approved guards are exellent with fast responce,
                  They have the best rate and Quality Security services.
                  </p>
                </div>
                <GuardsList />
              </div>
             </section>
           {/* Our guards Section End */}
           {/* FAQ Section */}
           <section>
        <div className="container">
          <div className="flex justify-center justify-items-center ">
            {/* <div className="w-1/2 hidden md:block">
              <img src={art1} alt="" />
            </div> */}

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our trusted clients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
           {/* FAQ Section End */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients say</h2>
            <p className="text__para text-center">
              World-class security for every business. Our security platform offers unmatched,
              expert in security services.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
         
    </>
  );
};

export default Home;
