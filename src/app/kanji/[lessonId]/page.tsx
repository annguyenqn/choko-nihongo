'use client';

import FlashCard from '@/components/FlashCard';
import QuizGame from '@/components/QuizGame';
import { CreditCard, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { KanjiItem } from '@/interface/IKanjiItem';

interface KanjiPageProps {
    params: { lessonId: string };
}

function KanjiLessonPage({ params }: KanjiPageProps) {
    const { lessonId } = params;

    const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz'>('flashcard');
    const [kanji, setKanji] = useState<KanjiItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    console.log('lessonid', lessonId);

    useEffect(() => {
        const fetchKanji = async () => {
            try {
                console.log('Fetching Kanji data...');
                const res = await fetch(`/api/kanji?lesson=${lessonId}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch kanji data');
                }
                const data = await res.json();
                setKanji(data);
            } catch (error) {
                console.error('Error fetching kanji:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchKanji();
    }, [lessonId]);

    return (
        <div>
            <Head>
                <title>Luyện Kanji N4 - Bài {lessonId}</title>
                <meta name="description" content={`Học Kanji N4 bài ${lessonId} với Flashcard và Quiz giúp bạn luyện tập Kanji hiệu quả.`} />
            </Head>

            <div className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative">
                <Image className="absolute bottom-0 left-0 hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
                <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">Luyện Kanji N4 - Bài {lessonId}</div>
                <Image className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
            </div>

            <div className="flex flex-col items-center justify-center md:min-h-screen h-[900px] w-full bg-gray-100 relative">
                <div className="flex flex-col absolute w-[80%] top-10 md:h-48 gap-2 z-20">
                    <h3 className="text-3xl font-bold text-black mt-6 mb-3">Kanji N4 - Bài {lessonId}</h3>

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

                    {/* Hiển thị loading khi dữ liệu chưa sẵn sàng */}
                    {loading ? (
                        <div className="text-center text-gray-500">Đang tải dữ liệu...</div>
                    ) : (
                        <div>
                            {activeTab === 'flashcard' && <FlashCard kanjiItems={kanji} />}
                            {activeTab === 'quiz' && <QuizGame kanjiItems={kanji} />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default KanjiLessonPage;
