import { BASE_URL, token } from "../../config";
import { useState } from "react";
import { differenceInCalendarDays, differenceInHours } from "date-fns" 
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import BookMeModal from "./BookMeModal";
import numeral from 'numeral';




const BookMe = ({ticketPrice, guardId}) => {
 
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    hours:"",
    startDate: "",
    endDate: "",
    prize:"",
    discription:"",
    
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  


  // const handleInputChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
   
  // };
  const handleInputChange = e => {
    const { name, value } = e.target;
  
    let parsedValue = value;
  
    if (name === 'prize') {
      // Format the prize value using numeral.js
      parsedValue = numeral(value).format('£0,0.00');
    }
  
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: parsedValue,
    }));

    setIsButtonDisabled(parsedValue === '£00,00');
  };
  
 
  


 
  const updateUserHandler = async e => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch(`${BASE_URL}/bookmes/${guardId}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        return toast.error(result);
      }

      toast.success("Booking successfully sent");

      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        hours:"",
        startDate: "",
        endDate: "",
        prize:"",
        discription:"",
      })
     
    } catch (err) {
      console.log(err);
    }
  };


  // let numberOfDaysNeededForWork = 0;
  // let totalWages = 0;
  // if (formData.startDate && formData.endDate) {
  //   numberOfDaysNeededForWork = differenceInHours(new Date(formData.endDate), new Date(formData.startDate) )
  //    totalWages =  numberOfDaysNeededForWork * parseInt(ticketPrice)
  // }

   let totalWages = 0;
  if (formData.hours && ticketPrice){
     totalWages = formData.hours * parseInt(ticketPrice)
     
  }
  


  return (
<>
  
    <div>
      <form onSubmit={updateUserHandler}>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter Your Email"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
            aria-readonly
          />
        </div>
        <div className="mb-5">
          <textarea
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            name="address"
            placeholder="Address"
            rows={2} 
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        <div className="mb-5">
          <input
            type="number"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Phone"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        <div className="mb-5">
        <label className="text-headingColor font-bold text-[16px] leading-7]">Hours Needed</label> 
          <input
            type="number"
            value={formData.hours}
            onChange={handleInputChange}
            name="hours"
            placeholder="Hours "
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        <div className="mb-5">
        <label className="text-headingColor font-bold text-[16px] leading-7]">Start Date</label> 
          <input
            type="date"
            value={formData.start}
            onChange={handleInputChange}
            name="startDate"
            placeholder="StartDate"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <label className="text-headingColor font-bold text-[16px] leading-7]">End Date</label>  
          <input
            type="date"
            value={formData.end}
            onChange={handleInputChange}
            name="endDate"
            placeholder="EndDate"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
          <div className="pt-5 pb-7 w-full pr-4 py-3 border-b border-solid border-[#00c8ff] ">
          <label className="text-headingColor font-bold text-[16px] leading-7]"> Total Price </label>  <br/>
           <label >   {totalWages > 0 && (`Total Prize is £${totalWages}`)}   </label>
          </div>
          
        </div>
        <div className="mb-5">
        <label className="text-headingColor font-bold text-[16px] leading-7]"> Input Calculated Price </label>  
          <input
            type="text"
            value={formData.prize}
            onChange={handleInputChange}
            name="prize"
            placeholder="£00.00"
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <textarea
            type="text"
            value={formData.discription}
            onChange={handleInputChange}
            name="discription"
            placeholder="Discription"
            rows={6} 
            className="w-full pr-4 py-3 border-b border-solid border-[#00c8ff] focus:outline-none focus:border-b-[#26a9ce] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
    
          
        
 
      

        <div className="mt-7">
          <button
            onClick={toast.success ? openModal : null} 
            disabled={isButtonDisabled}
            type="submit"
            // className="w-full  bg-sky-500 hover:bg-sky-700 ... text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
           
            className={`w-full  bg-sky-500 hover:bg-sky-700 ... text-white py-3 px-4 rounded-lg text-[18px] leading-[30px] ${isButtonDisabled ? 'opacity-50 pointer-events-none' : ''}`}
           
          >
            Book Me
          </button>
          <BookMeModal 
          
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  content={<p className="text-color- ">Thank you for booking. <br/> 
                                                       Your Booking is pending. <br/> 
                                                       We'll notify you as soon as your booking is approved. <br/>
                                                       Make payment as soon as it's approved.  </p> 
                           
                           }
          
          />
        </div>
      </form>
      <div>
     </div>
    </div>
    
    </>
  );
};

export default BookMe;
