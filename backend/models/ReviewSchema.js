import mongoose from "mongoose";
import Guard from "./GuardSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    guard: {
      type: mongoose.Types.ObjectId,
      ref: "Guard",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// prevent duplicate review
// reviewSchema.index({ guard: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

reviewSchema.statics.calcAverageRatings = async function (guardId) {
  const stats = await this.aggregate([
    {
      $match: { guard: guardId },
    },
    {
      $group: {
        _id: "$guard",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await Guard.findByIdAndUpdate(guardId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.guard);
});

export default mongoose.model("Review", reviewSchema);
