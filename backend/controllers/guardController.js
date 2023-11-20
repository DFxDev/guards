import Booking from "../models/BookingSchema.js";
import Guard from "../models/GuardSchema.js";

// update guard
export const updateGuard = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedGuard = await Guard.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedGuard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete guard
export const deleteGuard = async (req, res) => {
  const id = req.params.id;

  try {
    await Guard.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle guard
export const getSingleGuard = async (req, res) => {
  const id = req.params.id;

  try {
    const guard = await Guard.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: guard,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getAll guard
export const getAllGuard = async (req, res) => {
  try {
    const { query } = req.query;
    let guards;

    if (query) {
      // Search based on guard name or specialization
      guards = await Guard.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the name field
          { specialization: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the specialization field
        ],
      }).select("-password");
    } else {
      // Get all approved guards
      guards = await Guard.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Successful",
      data: guards,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};



export const getGuardProfile = async (req, res) => {
  const userId = req.userId;

  try {
    // let user = null;
    const user = await Guard.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const appointments = await Booking.find({ guard: userId });

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! cannot get!" });
  }
};
