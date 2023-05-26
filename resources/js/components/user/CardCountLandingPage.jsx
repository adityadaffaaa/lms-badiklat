import React from 'react';
import icons from './Icons';

export const CardCountLandingPage = () => {
  return (
    <div className="max-w-[250px] w-[250px] h-[150px] bg-white shadow-defaultShadow flex flex-col items-center justify-center rounded-2xl">
      <h1 className="text-heading1 text-skyBlue70 m-0">40</h1>
      <h5 className="flex items-center text-heading5 text-neutral-400">
        <img className="h-[18px]" src={icons.map((value) => value.books)} alt="" />
        Kursus
      </h5>
    </div>
  );
};

export default CardCountLandingPage;
