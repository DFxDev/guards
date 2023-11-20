import React from 'react'
import { guards } from '../../assets/data/guards'
import GuardCard from './GuardCard';
import { BASE_URL } from "../../config.js";
import useFetchData from "../hooks/useFetchData";
import HashLoader from 'react-spinners/HashLoader';
import { v4 as uuidv4 } from 'uuid';

const GuardsList = () => {
  const { data: guards, loading, error } = useFetchData(`${BASE_URL}/guards`);
  return (
    <>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {guards?.map(guard => (
            <GuardCard guard={guard} key={ uuidv4()} />
          ))}
        </div>
      )}
    </>
  );
};

export default GuardsList;


