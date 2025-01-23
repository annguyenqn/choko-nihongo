import { useState } from "react";
import Pagination from '@/components/Pagination';
import { kanjiItems as initialKanjiItems } from "@/data/kanjiItems";

const FlashCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [slide, setSlide] = useState(false);
  const [shuffledKanjiItems, setShuffledKanjiItems] = useState(initialKanjiItems);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handlePaginationChange = (index: number) => {
    setFlipped(false);
    setSlide(true);
    setTimeout(() => {
      setCurrentItem(index);
      setSlide(false);
    }, 200);
  };

  const handleShuffle = () => {
    const shuffled = [...shuffledKanjiItems]
      .map((item) => ({ ...item, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .map(({ random, ...item }) => item);
    setShuffledKanjiItems(shuffled);
    setCurrentItem(0);
  };

  return (
    <div className="flex flex-col gap-3 mt-5 justify-center items-center h-[500px] bg-gray-100 relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleShuffle}
      >
        Xáo trộn
      </button>
      <div
        className={`card w-[1000px] h-[410px] perspective-800 transition-transform duration-500 ${slide ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"
          }`}
        style={{ perspective: "800px" }}
        onClick={handleClick}
      >
        <div
          className={`card__content relative w-full h-full p-8 text-white font-bold transition-transform duration-700 transform ${flipped ? "rotate-x-180" : ""
            }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-white shadow-xl rounded-xl flex items-center justify-center backface-hidden">
            <h2 className="text-3xl text-black">
              {shuffledKanjiItems[currentItem].kanji}
            </h2>
          </div>
          <div
            className="card__back absolute top-0 bottom-0 right-0 left-0 bg-white shadow-lg flex flex-col rounded-xl items-center justify-center transform rotate-y-180 backface-hidden"
          >
            <h2 className="text-3xl text-black">
              {shuffledKanjiItems[currentItem].hiragana}
            </h2>
            <h2 className="text-3xl text-black">
              {shuffledKanjiItems[currentItem].mean}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Pagination
          totalItems={shuffledKanjiItems.length}
          currentIndex={currentItem}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default FlashCard;
