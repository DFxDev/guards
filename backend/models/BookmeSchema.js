import mongoose from "mongoose";


const BookmeSchema = new mongoose.Schema({
  
   
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    address: { type: String, required: true,  },
   
    phone: { type: Number },

    hours: { type: Number },

    startDate: {type:Date, required:true},

    endDate: {type:Date, required:true},

    prize: { type: String },

    discription: {type: String, required: true},

    guard: { type: mongoose.Types.ObjectId,
      ref: "Guard", 
    },
   
    bookingFor: {
      type: mongoose.Types.ObjectId,
      ref: "Guard",
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
     
    },
   
    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
  },{
    timestamps:true
  });


  




 
  
  export default mongoose.model("Bookme", BookmeSchema);
  