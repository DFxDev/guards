
const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
         Contact us for any issues
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label  ">
              Your email
            </label>
            <input
              type="email"
              id= "email"
              className= "form__input mt-1 border-[#00c8ff]"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="form__input  mt-1 border-[#00c8ff]"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="form__input  mt-1 border-[#00c8ff]"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="btn  rounded  sm:w-fit  bg-sky-500 hover:bg-sky-700 ... ">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

