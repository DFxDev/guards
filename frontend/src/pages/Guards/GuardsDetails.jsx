import { useState } from "react";
// import guardImg from "../../assets/images/guard-img02.png";
import starIcon from "../../assets/images/Star.png";
import GuardAbout from "./GuardAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../components/hooks/useFetchData";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import BookMe from "./BookMe";

const GuardDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
 
  const {
    data: guard,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/guards/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = guard;

  return (
    <section>
      <div className="max-w-[1170px] px-[20px] mx-auto">
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#3d98b1" />
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
              {error}
            </h3>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex gap-5 items-center">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>
                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-[36px] mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
                      <img src={starIcon} alt="" /> {averageRating}
                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#9b9fa534]">
                <div>
                  <button
                    onClick={() => setTab("about")}
                    className={`${
                      tab === "about" &&
                      "border-b border-solid border-[#00c8ff]"
                    }  p-2 mr-5 px-5 mt-12 text-headingColor font-semibold text-[16px] leading-7  `}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setTab("feedback")}
                    className={`${
                      tab === "feedback" &&
                      "border-b border-solid border-[#00c8ff]"
                    } py-2 px-5  font-semibold text-headingColor text-[16px] leading-7 `}
                  >
                    Feedback
                  </button>
                  <button
                    onClick={() => setTab("Bookme")}
                    className={`${
                      tab === "Bookme" &&
                      "border-b border-solid border-[#00c8ff]"
                    } py-2 px-5  font-semibold text-headingColor text-[16px] leading-7 `}
                  >
                    Book-Me
                  </button>
                </div>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <div>
                    <GuardAbout
                      name={name}
                      about={about}
                      qualifications={qualifications}
                      experiences={experiences}
                    />
                  </div>
                )}
                {tab === "feedback" && (
                  <div>
                    <Feedback 
                      reviews={reviews} 
                      totalRating={totalRating} />
                  </div>
                )}
                 {tab === "Bookme" && (
                  <div>
                    <BookMe
                      ticketPrice={ticketPrice}
                      guardId={guard._id}
                       />
                  </div>
                )}
              </div>
            </div>
            <div>
              <SidePanel
                guardId={guard._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuardDetails;
