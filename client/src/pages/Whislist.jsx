import React from "react";
import { useSavedJobs } from "../context/JobContext";
import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

export const Whislist = () => {
  const { wishlist } = useSavedJobs();
  return (
    <>
      {wishlist ? (
        <>
          <h2 className="text-center mt-5 mb-5 font-semibold text-xl">
            My WishList App
          </h2>
          <div className="p-5 flex justify-start items-center flex-wrap gap-2">
            {wishlist?.map((job, index) => (
              <Link to={`/job-detail/${job?._id}`} key={index}>
                <div
                  // key={index}
                  className="w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white outline outline-gray flex flex-col justify-between shadow-lg 
  rounded-md px-3 py-5 hover:shadow-2xl hover:outline outline-1 outline-[#1d4ed8]"
                >
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex gap-3">
                      <img
                        src={job?.company.profileUrl}
                        alt={job?.company.name}
                        className="w-14 h-14"
                      />

                      <div className="w-full h-16 flex flex-col justify-center">
                        <p className="w-full h-12 flex iteme-center text-lg font-semibold overflow-hidden leading-5">
                          {job?.jobTitle}
                        </p>
                        <span className="flex gap-2 items-center">
                          <GoLocation className="text-slate-900 text-sm" />
                          {job?.location}
                        </span>
                      </div>
                    </div>

                    <div className="py-3">
                      <p className="text-sm">
                        {job?.detail[0]?.desc?.slice(0, 150) + "..."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
                        {job?.jobType}
                      </p>
                      <span className="text-gray-500 text-sm">
                        {moment(job?.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center py-36">
            <p className="text-slate-500 font-semibold text-lg">
              there are no saved applications
            </p>
          </div>
        </>
      )}
    </>
  );
};
