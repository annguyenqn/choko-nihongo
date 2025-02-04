import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Pagination from '@/components/Pagination';
import { KanjiLesson } from "@/interface/IKanjiItem";

interface FlashCardProps {
  kanjiItems: KanjiLesson[];
}

const FlashCard: React.FC<FlashCardProps> = ({ kanjiItems }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [slide, setSlide] = useState(false);
  const [shuffledKanjiItems, setShuffledKanjiItems] = useState(kanjiItems);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  if (kanjiItems.length === 0) {
    return <div>Đang tải dữ liệu...</div>;
  }

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
    <div className="flex flex-col gap-3 justify-center items-center md:h-[650px] h-[450px] relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 md:mb-5 rounded"
        onClick={handleShuffle}
      >
        Xáo trộn
      </button>

      {/* Thẻ flash card */}
      <div
        className={`card w-full h-full md:h-[600px] flex flex-col justify-center items-center perspective-800 transition-transform duration-500 ${slide ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"}`}
        style={{ perspective: "800px" }}
        onClick={handleClick}
      >
        <div
          className={`card__content relative w-full h-full p-8 text-white font-bold transition-transform duration-700 transform ${flipped ? "rotate-x-180" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-white shadow-xl rounded-xl flex items-center justify-center backface-hidden">
            {/* Skeleton cho phần Kanji */}
            {shuffledKanjiItems.length === 0 ? (
              <Skeleton className="w-24 h-24 bg-gray-300" />
            ) : (
              <h2 className="text-5xl text-black">
                {shuffledKanjiItems[currentItem]?.kanji}
              </h2>
            )}
          </div>
          <div className="card__back absolute top-0 bottom-0 right-0 left-0 bg-white shadow-lg flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-6">
            <div className="w-auto  mx-auto">
              {/* Skeleton cho phần nghĩa */}
              {shuffledKanjiItems.length === 0 ? (
                <Skeleton className="w-32 h-6 bg-gray-300 mb-2" />
              ) : (
                <div className="md:text-4xl text-xl text-black font-bold md:mb-4">
                  <strong>Nghĩa: </strong>
                  {typeof shuffledKanjiItems[currentItem]?.mean === 'string'
                    ? JSON.parse(shuffledKanjiItems[currentItem]?.mean)?.vi
                    : shuffledKanjiItems[currentItem]?.mean?.vi}
                </div>
              )}

              {/* Skeleton cho Hiragana */}
              {shuffledKanjiItems.length === 0 ? (
                <Skeleton className="w-32 h-6 bg-gray-300 md:mb-2" />
              ) : (
                <div className="md:space-y-2">
                  <div className="md:text-4xl text-xl text-black font-bold md:mb-4">
                    <strong>Phiên âm:</strong> {shuffledKanjiItems[currentItem]?.hiragana}
                  </div>
                </div>
              )}

              {/* ví dụ */}
              <div className="md:text-4xl text-xl text-black font-bold md:mb-4">
                {shuffledKanjiItems[currentItem]?.lesson == 1 && (
                  <>
                    <strong className="">Ví Dụ: </strong>
                    {shuffledKanjiItems[currentItem]?.examples?.map((example, idx) => (
                      <div key={idx} className="md:my-2 my-0 ml-3">
                        <span className="font-semibold"> - {example.sentence} ({example.reading})</span>{" "}
                        <span>{example.meaning.vi}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Kanji Parts */}
              {shuffledKanjiItems.length === 0 ? (
                <Skeleton className="w-full h-6 bg-gray-300 md:mt-4" />
              ) : (
                <div className="md:mt-2">
                  {shuffledKanjiItems[currentItem]?.lesson !== 1 && (
                    <>
                      <strong className="md:text-4xl text-xl text-black">Kanji Parts:</strong>
                      <ul className="list-outside pl-10 list-disc  md:text-2xl md:mt-2 text-xl">
                        {Array.isArray(shuffledKanjiItems[currentItem]?.kanji_parts)
                          ? shuffledKanjiItems[currentItem]?.kanji_parts.map((part, idx) => (
                            <li key={idx} className="text-black">
                              <strong>{part.kanji}:</strong> {part.han_viet} - {typeof part.meaning === 'string' ? JSON.parse(part.meaning).vi : part.meaning?.vi}
                            </li>
                          ))
                          : JSON.parse(shuffledKanjiItems[currentItem]?.kanji_parts)?.map(
                            (part, idx) => (
                              <li key={idx} className="text-black ">
                                <strong>{part.kanji}:</strong> {part.han_viet} - {typeof part.meaning === 'string' ? JSON.parse(part.meaning).vi : part.meaning?.vi}
                              </li>
                            )
                          )}
                      </ul>
                    </>
                  )}

                </div>
              )}
            </div>
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
