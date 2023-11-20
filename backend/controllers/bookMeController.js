import Bookme from "../models/BookmeSchema.js";
import { getUserDataFromReq } from "../utils.js";
import Guard from "../models/GuardSchema.js";
// import User from "../models/UserSchema.js";


  // const { email, name, startDate, endDate, address, phone, prize, discription } = req.body;

  // try {
  //   const newbookme = new Bookme({
  //     email,
  //     name,
  //     startDate,
  //     endDate,
  //     address,
  //     phone,
  //     prize,
  //     discription,
  //   });

  //   const savedBookme = await newbookme.save();


  //   res
  //     .status(200)
  //     .json({ success: true, message: "Bookme submitted", data: savedBookme });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ success: false, message: "Internal server error! Try again" });
  // }


  
  export const postBookmeDetails = async (req, res) => {

  try {
    const { email, name, hours, startDate, endDate, address, phone, prize, discription } = req.body

    if( !email || !address || !discription || !hours || !prize || !phone || !startDate || !endDate){
      throw new Error('Please Provide All Details')
    }
        const guardId = req.params.guardId 
        req.body.bookingFor = guardId 
        req.body.guard = guardId
        req.body.createdBy = req.userId 

    const savedBookme = await Bookme.create(req.body)

    await Guard.findByIdAndUpdate(req.body.guard, {
            $push: { bookmes: savedBookme._id },
          });
          
          try {
         
            const userDetails = await Bookme.find()
              .populate({
                path: "createdBy",
                model: "User", // Specify the model for the reference
              })
              .exec();

           
          
            console.log(userDetails);
          
            if ( !userDetails) {
              console.log('User details not found');
            }
          } catch (error) {
            console.error(error);
          }
             
    res
      .status(200)
      .json({ success: true, message: "Bookme submitted", data: savedBookme });
  } catch (error) {
    console.error("Error in postBookmeDetails:", error); // Log the error for debugging
    res
      .status(500)
      .json({ success: false, message: "Internal server error! Try again" });
  }
 
};





export const getBookmeDetails = async (req, res) => {
  try {
   
    const guardId = req.userId;
    const bookmeDetails = await Bookme.find({ bookingFor:guardId }).sort('createdAt');

    res.status(200).json({
      success: true,
      message: "Successful",
      data: bookmeDetails, 
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};



export const deleteBookMeDetails = async (req, res) => {
  try {
    const { id: bookmeId } = req.params;
    const guardId = req.userId;
    const bookmeDetails = await Bookme.findByIdAndDelete({_id: bookmeId , bookingFor:guardId });

    if (!bookmeDetails) {
            return res.status(404).json({ message: 'BookMe Details not found' });
          }

    res.status(200).json({
      success: true,
      message: "Bookme detail Succefully deleted",
       
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Internal server error",
    });
  }
};





// export const deleteBookMeDetails = async (req, res) => {
//   try {
//     const  guardId  = req.userId; 
//     const { id: bookmeId } = req.params;
//     const  guardId  = req.userId; 
//     // Checking if userId is not available in the request (e.g., due to authentication middleware failure)
//     if (!userId) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const result = await Bookme.findByIdAndDelete({ _id: bookmeId, bookingFor: guardId });

//     if (!result) {
//       return res.status(404).json({ message: 'BookMe Details not found' });
//     }

//     return res.status(200).json({ message: 'BookMe Details deleted successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

  
