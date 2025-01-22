"use client";

import { useState } from "react";
import Pagination from '@/components/Pagination'
const FlashCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [slide, setSlide] = useState(false);
  const kanjiItems = [
    {
      id: 0,
      kanji: '天気',
      hiragana: 'てんき',
      mean: 'Thời Tiết'
    },
    {
      id: 1,
      kanji: '学校',
      hiragana: 'がっこう',
      mean: 'Trường Học'
    },
    {
      id: 2,
      kanji: '先生',
      hiragana: 'せんせい',
      mean: 'Giáo Viên'
    },
    {
      id: 3,
      kanji: '友達',
      hiragana: 'ともだち',
      mean: 'Bạn Bè'
    },
    {
      id: 4,
      kanji: '山',
      hiragana: 'やま',
      mean: 'Núi'
    },
    {
      id: 5,
      kanji: '川',
      hiragana: 'かわ',
      mean: 'Sông'
    },
    {
      id: 6,
      kanji: '車',
      hiragana: 'くるま',
      mean: 'Xe'
    },
    {
      id: 7,
      kanji: '月',
      hiragana: 'つき',
      mean: 'Mặt Trăng'
    },
    {
      id: 8,
      kanji: '火',
      hiragana: 'ひ',
      mean: 'Lửa'
    },
    {
      id: 9,
      kanji: '水',
      hiragana: 'みず',
      mean: 'Nước'
    },
    {
      id: 10,
      kanji: '木',
      hiragana: 'き',
      mean: 'Cây'
    },
    {
      id: 11,
      kanji: '金',
      hiragana: 'きん',
      mean: 'Vàng'
    },
    {
      id: 12,
      kanji: '土',
      hiragana: 'つち',
      mean: 'Đất'
    },
    {
      id: 13,
      kanji: '日',
      hiragana: 'ひ',
      mean: 'Mặt Trời'
    },
    {
      id: 14,
      kanji: '時間',
      hiragana: 'じかん',
      mean: 'Thời Gian'
    },
    {
      id: 15,
      kanji: '私',
      hiragana: 'わたし',
      mean: 'Tôi'
    },
    {
      id: 16,
      kanji: '本',
      hiragana: 'ほん',
      mean: 'Sách'
    },
    {
      id: 17,
      kanji: '何',
      hiragana: 'なに',
      mean: 'Cái Gì'
    },
    {
      id: 18,
      kanji: '人',
      hiragana: 'ひと',
      mean: 'Người'
    },
    {
      id: 19,
      kanji: '父',
      hiragana: 'ちち',
      mean: 'Bố'
    },
    {
      id: 20,
      kanji: '母',
      hiragana: 'はは',
      mean: 'Mẹ'
    },
    {
      id: 21,
      kanji: '駅',
      hiragana: 'えき',
      mean: 'Ga Tàu'
    },
    {
      id: 22,
      kanji: '電車',
      hiragana: 'でんしゃ',
      mean: 'Tàu Điện'
    },
    {
      id: 23,
      kanji: '空',
      hiragana: 'そら',
      mean: 'Bầu Trời'
    },
    {
      id: 24,
      kanji: '子供',
      hiragana: 'こども',
      mean: 'Trẻ Con'
    }
  ];
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

  return (
    <div className="flex flex-col gap-3 mt-5 justify-center items-center h-[500px] bg-gray-100 relative">
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
              {kanjiItems[currentItem].kanji}
            </h2>
          </div>
          <div
            className="card__back absolute top-0 bottom-0 right-0 left-0 bg-white shadow-lg flex flex-col rounded-xl items-center justify-center transform rotate-y-180 backface-hidden"
          >
            <h2 className="text-3xl text-black">
              {kanjiItems[currentItem].hiragana}
            </h2>
            <h2 className="text-3xl text-black">
              {kanjiItems[currentItem].mean}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Pagination
          totalItems={kanjiItems.length}
          currentIndex={currentItem}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default FlashCard;
