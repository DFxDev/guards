import Booking from "../models/BookingSchema.js";
import Guard from "../models/GuardSchema.js";
import Stripe from "stripe";
import User from "../models/UserSchema.js";

export const getCheckoutSession = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // get the currently booked guard
    const guard = await Guard.findById(req.params.guardId);
    const user = await User.findById(req.userId);

    // create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/guard/${guard.id}`,
      customer_email: user.email,
      client_reference_id: req.params.guardId,
      line_items: [
        {
          price_data: {
            currency: "GBP",
            unit_amount: guard.ticketPrice * 100,
            product_data: {
              name: guard.name,
              description: guard.bio,
              images: [guard.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create a booking object with the necessary details
    const booking = new Booking({
      guard: guard._id,
      user: user._id,
      ticketPrice: guard.ticketPrice,
      session: session.id,
    });

    // Save the booking object to the database
    await booking.save();

    // send the created session as a response
    res.status(200).json({ success: true, message: "Success", session });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error creating checkout session" });
  }
};
