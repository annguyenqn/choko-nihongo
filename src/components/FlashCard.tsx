import { useState } from "react";
import Pagination from '@/components/Pagination';

interface KanjiItem {
  id: number;
  kanji: string;
  hiragana: string;
  mean: string;
  on_yomi: string;
  examples: string[];
}

interface FlashCardProps {
  kanjiItems: KanjiItem[];
}

const FlashCard: React.FC<FlashCardProps> = ({ kanjiItems }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [slide, setSlide] = useState(false);
  const [shuffledKanjiItems, setShuffledKanjiItems] = useState(kanjiItems);

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
    <div className="flex flex-col gap-3 justify-center items-center md:h-[650px] h-[350px] relative">
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
            <h2 className="text-5xl text-black"> {/* Chỉnh kích cỡ chữ lớn hơn */}
              {shuffledKanjiItems[currentItem].kanji}
            </h2>
          </div>
          <div className="card__back absolute top-0 bottom-0 right-0 left-0 bg-white shadow-lg flex flex-col rounded-xl items-center justify-center transform rotate-y-180 backface-hidden">
            <h2 className="text-4xl text-black">
              {shuffledKanjiItems[currentItem].mean}
            </h2>
            <p className="text-xl text-black">
              Hiragana: {shuffledKanjiItems[currentItem].hiragana}
            </p>
            <p className="text-xl text-black">
              Onyomi: {shuffledKanjiItems[currentItem].on_yomi}
            </p>
            <div className="text-lg text-black">
              <strong>Examples:</strong>
              <ul>
                {shuffledKanjiItems[currentItem].examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
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
