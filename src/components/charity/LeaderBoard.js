import React from "react";
import Image from "next/image";
import backgroundImage from "../../assets/images/nimbusAidProjectImg.png";
import noProfile from "../../assets/images/nomineeLogos/noProfile.jpg"

function NomineeLeaderBoard({ allSortedVotes, isLoading }) {
  const Card = ({ imgPath, name, pool, num }) => {
    return (
      <div className=" bg-white flex items-center justify-between rounded-30 h-28 sm:h-28 lg:h-28 w-full sm:w-450 md:w-500 lg:w-650 mx-auto text-brand-color1 drop-shadow-xl">
        <div className="flex items-center pl-5">
          <div className=" h-7 w-7 font-semibold text-sm md:text-lg rounded-full bg-charity-color8 text-white flex justify-center items-center">
            <h1>{num}</h1>
          </div>
          {/* <div className="w-14 md:w-20 h-14 md:h-20 relative rounded-full overflow-hidden">
            <Image src={noProfile} objectFit="cover" layout="fill" />
          </div> */}
          <div className="px-3 sm:px-5 font-semibold text-base sm:text-lg md:text-2xl">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="text-xl md:text-2xl font-semibold pl-4 pr-8">
          <p>{pool}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-90 sm:w-4/5 mx-auto">
      <div className="w-full p-0 lg:py-5">
        <div className=" text-center pb-12">
          <h1 className=" text-white font-extrabold text-3xl md:text-4xl">
            LEARDERBOARD
          </h1>
        </div>
        {isLoading ? (
          <div className="py-20">
            <p className="text-center text-white font-bold text-2xl">
              Loading...
            </p>
          </div>
        ) : (
          <div className=" space-y-7 flex-col justify-center">
            {allSortedVotes.length !== 0 &&
              allSortedVotes.map((data, index) => {
                return (
                  index < 5 && (
                    <Card
                      key={index}
                      num={index + 1}
                      imgPath={backgroundImage}
                      name={data._id}
                      pool={data.num}
                    />
                  )
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NomineeLeaderBoard;
