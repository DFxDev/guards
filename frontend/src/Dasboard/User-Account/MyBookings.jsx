import { BASE_URL } from "../../config";

import GuardCard from "../../components/GuardSecurity/GuardCard";
import useFetchData from "../../components/hooks/useFetchData";
import HashLoader from "react-spinners/HashLoader";

const MyBookings = () => {
  const {
    data: myAppointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log(myAppointments);

  return (
    <div>
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
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
          {myAppointments?.map(guard => (
            <GuardCard guard={guard} key={guard.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
