"use client";

import { useState } from "react";
import Pagination from '@/components/Pagination'
const FlashCard = () => {
  const [flipped, setFlipped] = useState(false);
  const totalItems = 240;
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col gap-3 mt-5 justify-center items-center h-[500px] bg-gray-100 relative ">
      <div
        className="card w-[1000px] h-[410px] perspective-800 "
        onClick={handleClick}
        style={{ perspective: '800px' }}
      >
        <div
          className={`card__content relative w-full h-full p-8 text-white font-bold transition-transform duration-700 transform ${flipped ? 'rotate-y-180' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-white shadow-xl rounded-xl flex items-center justify-center backface-hidden">
            <h2 className="text-3xl text-black">天気</h2>
          </div>
          <div
            className="card__back absolute top-0 bottom-0 right-0 left-0 bg-white shadow-lg flex rounded-xl items-center justify-center transform rotate-y-180 backface-hidden"
          >
            <h2 className="text-3xl text-black">てんき</h2>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Pagination totalItems={totalItems} />
      </div>
    </div>
  );
};

export default FlashCard;
