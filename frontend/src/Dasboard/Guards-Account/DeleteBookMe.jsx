import React from 'react'
import BackButton from './BackButton';

import { BASE_URL } from "../../config";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import axios from 'axios';

const DeleteBookMe = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 const { id } = useParams();

    
    const handleDeleteBookme =  () => {
     
      setLoading(true);
      axios
        .delete(`${BASE_URL}/bookmes/${id}`)
        .then(() => {
          setLoading(false);
          toast.success("Booking Details successfully deleted");
          navigate('/guards/profile/me');
        })
        .catch((error) => {
          setLoading(false);
        
          toast.error("An error occurred. Please try again later");
          console.log(error);
        });


    }


    // const handleDeleteBookme = () => {
    //   if (window.confirm('Are you sure you want to delete this booking?')) {
    //     setLoading(true);
    //     axios
    //       .delete(`${BASE_URL}/bookmes/${id}`)
    //       .then(() => {
    //         setLoading(false);
    //         toast.success('Booking successfully deleted');
    //         navigate('/guards/profile/me');
    //       })
    //       .catch((error) => {
    //         setLoading(false);
    //         toast.error('An error occurred. Please try again later');
    //         console.error(error);
    //       });
    //   }
    // };

    

  return (
    <div className='p-4'>
   
    <div className='flex flex-col items-center justify-between h-96'>
    <div className='mt-auto'>
    <h1 className='flex items-center justify-center text-2xl my-4 lg:text-3xl' >
      Delete BookMe details
    </h1>
    {loading ? <HashLoader color="#3d98b1" position="center" /> : ''}
    <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[300px] p-8 mx-auto lg:w-[600px]'>
      <h3 className='text-1xl'>Are You Sure You want to delete this bookme Detail?</h3>

      <button
        className='p-4 bg-red-600 text-white m-8 w-full rounded-lg'
        onClick={handleDeleteBookme}
      >
        Yes, Delete it
      </button>
    </div>
    </div>
    <div className='mt-4 pt-8' >
    <BackButton className="flex items-center justify-center "/>
    </div>
  
    </div>
  </div>
  )
}

export default DeleteBookMe
