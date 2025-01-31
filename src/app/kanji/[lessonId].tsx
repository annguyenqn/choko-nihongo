// 'use client'
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import FlashCard from '@/components/FlashCard';
// import QuizGame from '@/components/QuizGame';
// import { CreditCard, BookOpen } from 'lucide-react';
// import Image from 'next/image';
// import Head from 'next/head';
// import { KanjiItem } from '@/interface/IKanjiItem';
// function KanjiLessonPage() {
//     const router = useRouter();
//     const { lessonId } = router.query;
//     const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz'>('flashcard');
//     console.log('lessonid ');
//     // const [kanji, setKanji] = useState<KanjiItem[]>([]);
//     // const [loading, setLoading] = useState<boolean>(true);
//     // useEffect(() => {
//     //     const fetchKanji = async () => {
//     //         try {
//     //             console.log('Fetching posts from API...');

//     //             const res = await fetch(`/api/kanji?lesson=36`);

//     //             // Kiểm tra nếu API trả về lỗi
//     //             if (!res.ok) {
//     //                 throw new Error('Failed to fetch posts');
//     //             }

//     //             const data = await res.json();

//     //             // Log dữ liệu đã nhận từ API
//     //             console.log('Fetched Posts:', data);

//     //             setKanji(data);
//     //         } catch (error) {
//     //             // Log lỗi nếu có
//     //             console.error('Error fetching posts:', error);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchKanji();
//     // }, []);
//     // const kanjiItems: KanjiItem[] = getKanjiLessons(Number(lessonId)) as unknown as KanjiItem[];

//     return (
//         <div>
//             <Head>
//                 <title>Luyện Kanji N4 - Bài {lessonId}</title>
//                 <meta name="description" content={`Học Kanji N4 bài ${lessonId} với Flashcard và Quiz giúp bạn luyện tập Kanji hiệu quả.`} />
//                 <meta name="robots" content="index, follow" />
//                 <meta property="og:title" content={`Luyện Kanji N4 - Bài ${lessonId}`} />
//                 <meta property="og:description" content={`Học Kanji N4 bài ${lessonId} với Flashcard và Quiz giúp bạn luyện tập Kanji hiệu quả.`} />
//                 <meta property="og:url" content={`https://yourdomain.com/kanji/${lessonId}`} />
//             </Head>

//             <div className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative">
//                 <Image className="absolute bottom-0 left-0 hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
//                 <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">Luyện Kanji N4 - Bài {lessonId}</div>
//                 <Image className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block" src="/tem.svg" width={620} height={620} alt="temple" />
//             </div>

//             <div className="flex flex-col items-center justify-center md:min-h-screen h-[900px] w-full bg-gray-100 relative">
//                 <div className="flex flex-col absolute w-[80%] top-10 md:h-48 gap-2 z-20">
//                     <h3 className="text-3xl font-bold text-black mt-6 mb-3">Kanji N4 - Bài {lessonId}</h3>
//                     <div className="flex justify-start gap-5 mb-6 w-full">
//                         <div
//                             className={`flex flex-col rounded-lg md:h-24 md:w-36 w-28 h-20 gap-2 justify-center items-center cursor-pointer ${activeTab === 'flashcard' ? 'border-b-4 border-red-500 bg-white' : 'bg-white hover:border-b-4 hover:border-red-500'}`}
//                             onClick={() => setActiveTab('flashcard')}
//                         >
//                             <CreditCard />
//                             <div className="text-sm">Thẻ Ghi Nhớ</div>
//                         </div>
//                         <div
//                             className={`flex flex-col rounded-lg md:h-24 md:w-36 w-28 h-20 gap-2 justify-center items-center cursor-pointer ${activeTab === 'quiz' ? 'border-b-4 border-red-500 bg-white' : 'bg-white hover:border-b-4 hover:border-red-500'}`}
//                             onClick={() => setActiveTab('quiz')}
//                         >
//                             <BookOpen />
//                             <div>Học</div>
//                         </div>
//                     </div>
//                     {/* <div>
//                         {activeTab === 'flashcard' && <FlashCard kanjiItems={kanji} />}
//                         {activeTab === 'quiz' && <QuizGame kanjiItems={kanji} />}
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default KanjiLessonPage;
