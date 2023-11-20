import useGetBookmes from "../../components/hooks/useFetchData";
import useGetProfile from "../../components/hooks/useFetchData";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import { formatDate } from "../../utils/formatDate";
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md'

const Bookings = ({ guardId } ) => {

   
   
  const {
 
        data: guardBookmeData,
        loading,
        error,
      } = useGetBookmes(`${BASE_URL}/bookmes?guardId=${guardId}`);
       console.log(guardBookmeData)



    return (
      
     <section >
       <div className="max-w-[1170px] px-5 ">
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#3d98b1" />
          </div>
        )}
        {error && (
          <div>
            <h3>{error.message}</h3>
          </div>
        )}

        {!loading && !error && (
      <table className="w-full text-sm text-left text-gray-500 ml-[-50px]">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address 
            </th>
            <th scope="col" className="px-6 py-3">
              StartDate
            </th>
            <th scope="col" className="px-6 py-3">
              EndDate
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
             Hours
            </th>
            <th scope="col" className="px-6 py-3">
             Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {guardBookmeData?.map(item => (
            <tr key={item._id} className="bg-white border-b  hover:bg-gray-50 ">
              {/* <th
                scope="row"
                className="flex items-center px-4 py-6 text-gray-900 whitespace-wrap "
              >
               
                <div className="pl-3 pt-3">
                 
                  <div className="font-normal text-gray-500">
                    {item.address}
                  </div>
                  <div className="text-base font-semibold">{item.hours}</div>
                  <div className="font-normal text-gray-500">
                    {item.description}
                  </div>
                </div>
              </th> */}
              
               <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.address}</td>
              <td className="px-6 py-4">{formatDate(item.startDate)}</td>
              <td className="px-6 py-4">{formatDate(item.endDate)}</td>
              
              <td className="px-6 py-4">£{item.prize}</td>

              <td className="px-6 py-4">{item.discription}</td>
              <td className="px-6 py-4">{item.hours} {item.hours === 1 ? 'hr' : 'hrs'}</td>
              
              
              <td className="px-6 py-4">
                  <div className='flex justify-center gap-x-4'>
                   <div className="flex flex-col gap-4 ">
                   <Link to={`/bookme-delete/${item._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                    <Link className="text-green-600" to={`/bookme-delete/${item._id}`}>
                     Accept
                    </Link>
                    <Link className="text-red-600" to={`/bookme-delete/${item._id}`}>
                     Decline
                    </Link>
                   </div>
                    

                  </div>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
       
          )}
          </div>
          
      </section>
   
    );
  };
  
  export default Bookings;
  

//   <td className="px-6 py-4">
//   {item.paid && (
//     <div className="flex items-center">
//       <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
//       paid
//     </div>
//   )}

//   {!item.isPaid && (
//     <div className="flex items-center">
//       <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
//       Unpaid
//     </div>
//   )}
// </td>


// <img
// className="w-10 h-10 rounded-full"
// src={item.name}
// alt="image"
// />