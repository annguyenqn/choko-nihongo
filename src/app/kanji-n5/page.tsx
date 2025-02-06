"use client"; // Ensures this runs on the client-side

import React, { useState, useEffect } from 'react';
import FlashCard from '@/components/FlashCard';
import QuizGame from '@/components/QuizGame';
import Image from 'next/image';
import Head from 'next/head';
import { CreditCard, BookOpen } from 'lucide-react';
import { KanjiData } from '@/interface/Ikanji';

function Page() {
    const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz'>('flashcard');
    const [kanjiItems, setKanjiItems] = useState<KanjiData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKanjiData = async () => {
            try {
                const response = await fetch('/api/kanji-n5'); // Call the API you created
                if (!response.ok) throw new Error('Failed to fetch Kanji N5 data');
                const data: KanjiData[] = await response.json();
                setKanjiItems(data);
            } catch (error) {
                console.error("Error fetching Kanji N5:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchKanjiData();
    }, []);

    return (
        <div>
            <Head>
                <title>Luyện Kanji N5 - Học Kanji, Flashcard và Quiz</title>
                <meta name="description" content="Học Kanji N5 với thẻ ghi nhớ và quiz. Luyện tập kanji hiệu quả với flashcard và trò chơi quiz. Cải thiện kỹ năng kanji của bạn ngay hôm nay!" />
                <meta name="keywords" content="Học Kanji N5, Kanji, Flashcard, Luyện Kanji, Quiz Kanji, Thẻ ghi nhớ, học tiếng Nhật, học kanji hiệu quả" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Luyện Kanji N5 - Học Kanji, Flashcard và Quiz" />
                <meta property="og:description" content="Học Kanji N5 với thẻ ghi nhớ và quiz. Luyện tập kanji hiệu quả với flashcard và trò chơi quiz. Cải thiện kỹ năng kanji của bạn ngay hôm nay!" />
                <meta property="og:image" content="/images/kanji-image.jpg" />
                <meta property="og:url" content="https://yourdomain.com/learn-kanji-n5" />
                <meta name="twitter:title" content="Luyện Kanji N5 - Học Kanji, Flashcard và Quiz" />
                <meta name="twitter:description" content="Học Kanji N5 với thẻ ghi nhớ và quiz. Luyện tập kanji hiệu quả với flashcard và trò chơi quiz. Cải thiện kỹ năng kanji của bạn ngay hôm nay!" />
                <meta name="twitter:image" content="/images/kanji-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* Background Header */}
            <div className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative">
                <Image className="absolute bottom-0 left-0 hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
                <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">Luyện Kanji N5</div>
                <Image className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 relative">
                <div className="flex flex-col w-[80%] top-10 gap-2 z-20 min-h-0">
                    <h3 className="text-3xl font-bold text-black mt-6 mb-3">Kanji - N5</h3>

                    {/* Tab Navigation */}
                    <div className="flex justify-start gap-5 mb-6 w-full">
                        <div
                            className={`flex flex-col rounded-lg md:h-24 md:w-36 w-28 h-20 gap-2 justify-center items-center cursor-pointer ${activeTab === 'flashcard' ? 'border-b-4 border-red-500 bg-white' : 'bg-white hover:border-b-4 hover:border-red-500'}`}
                            onClick={() => setActiveTab('flashcard')}
                        >
                            <CreditCard />
                            <div className="text-sm">Thẻ Ghi Nhớ</div>
                        </div>
                        <div
                            className={`flex flex-col rounded-lg md:h-24 md:w-36 w-28 h-20 gap-2 justify-center items-center cursor-pointer ${activeTab === 'quiz' ? 'border-b-4 border-red-500 bg-white' : 'bg-white hover:border-b-4 hover:border-red-500'}`}
                            onClick={() => setActiveTab('quiz')}
                        >
                            <BookOpen />
                            <div>Học</div>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="text-center text-lg font-semibold text-gray-600">Đang tải dữ liệu...</div>
                    ) : (
                        <div className="flex-grow">
                            {activeTab === 'flashcard' && <FlashCard kanjiItems={kanjiItems} />}
                            {activeTab === 'quiz' && <QuizGame kanjiItems={kanjiItems} />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page;
