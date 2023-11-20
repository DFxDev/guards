import React from 'react'
import security5 from '../../assets/images/imagess/security5.jpg'
import aboutCardImg from '../../assets/images/about-card.png'
import siaimg3 from '../../assets/images/imagess/siaimg3.jpeg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

            <div className=' relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>

                <img src={security5} alt="image" />

                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>

                    <img src={siaimg3} alt=""  className='object-scale-down h-40' />

                </div>
               
            </div>
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'> Proud to supply the best security guards in the field</h2>
                    <p className='text__para'>
                        All our guards are sia complaint.
                        consequuntur voluptatum laborum numquam blanditiis harum
                        quisquam eius sed odit fugiat iusto fuga praesentium optio,
                        eaque rerum! Provident similique accusantium nemo autem.
                        Veritatis.
                    </p>
                    <p className='text__para mt-[30px]'>
                        Our security guards strive to be the best for your business.
                        consequuntur voluptatum laborum numquam blanditiis haru,
                        eaque rerum! Provident similique accusantium nemo autem
                        eaque rerum! Provident similique accusantium nemo autem.
                        Veritatis.
                    </p>
                    <p className='text__para mt-[30px]'>
                        
                        quisquam eius sed odit fugiat iusto fuga praesentium optio,
                        eaque rerum! Provident similique accusantium nemo autem.
                        Veritatis.
                        eaque rerum! Provident similique accusantium nemo autem
                        quisquam eius sed odit fugiat iusto fuga praesentium optio,
                        eaque rerum! Provident similique accusantium nemo autem.
                        Veritatis.
                    </p>
                    <Link to='/'><button className='btn  bg-sky-500 hover:bg-sky-700 ...'>Find out more </button></Link>

            </div>
          </div>
        </div>
    </section>
  )
}

export default About
