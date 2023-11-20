import { useContext, useState } from "react";
// import security1 from "../../assets/images/imagess/security1.png";
import Profile from "./Profile";
import MyBookings from "./MyBookings";
import { BASE_URL } from "./../../config";

import useGetProfile from "../../components/hooks/useFetchData";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#3d98b1" />
          </div>
        )}
        {error && !loading && (
          <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
              {error}
            </h3>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10 ">
            <div className=" px-[30px] pb-[50px] rounded-md  ">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-[#00c8ff]">
                  <img
                    src={userData?.photo}
                    alt=""
                    className="w-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor mt-10 font-bold">
                  {userData?.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData?.email}
                </p>

            
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 rounded-md text-white text-[16px] leading-7"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 rounded-md text-white text-[16px] leading-7">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px] ">
            
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" && " bg-sky-500 hover:bg-sky-700 ... text-white font-normal"
                  }  p-2 mr-5 ml-9 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7  border border-solid border-[#00c8ff] `}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" && " bg-sky-500 hover:bg-sky-700 ... text-white font-normal"
                  } py-2 px-5 rounded-md font-semibold text-headingColor text-[16px] leading-7  border border-solid border-[#00c8ff]`}
                >
                  Settings
                </button>
                <button
                  onClick={() => setTab("messages")}
                  className={`${
                    tab === "messages" && " bg-sky-500 hover:bg-sky-700 ... text-white font-normal"
                  } ml-11 mt-2 py-2 px-5 rounded-md font-semibold text-headingColor text-[16px] leading-7  border border-solid border-[#00c8ff] lg:ml-5 md:ml-5`}
                >
                   Messages
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "bookings" && (
                  <div>
                    <h2 className="heading text-[30px] ml-3 lg:ml-5 md:ml-5">My bookings</h2>
                    <MyBookings />
                  </div>
                )}
                {tab === "settings" && (
                  <div>
                    <h2 className="heading text-[30px] ml-3 lg:ml-5 md:ml-5">Profile Settings</h2>
                    <Profile userData={userData} />
                  </div>
                )}
                 {tab === "messages" && (
                  <div>
                    <h2 className="heading text-[30px] ml-3 lg:ml-5 md:ml-5">Messages</h2>
                    {/* <Profile userData={userData} /> */}
                  </div>
                )}
              </div>
            </div>
           
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
