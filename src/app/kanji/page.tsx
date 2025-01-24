'use client'
import React, { useState } from 'react';
import FlashCard from '@/components/FlashCard'
import { CreditCard, BookOpen } from 'lucide-react'
import QuizGame from '@/components/QuizGame'
import Image from 'next/image'
function page() {
    const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz'>('flashcard');
    return (
        <div>
            <div
                className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative"
            >
                <Image
                    className="absolute bottom-0 left-0 hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />
                <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">
                    Luyện Kanji N5
                </div>
                <Image
                    className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 relative">
                <div className="flex flex-col absolute w-[80%] top-10 md:h-48  gap-2 z-20">
                    <h3 className='text-3xl font-bold text-black mt-6 mb-3'>Kanji N5 Tổng Hợp 80 Chữ</h3>
                    <div className="flex justify-start gap-5 mb-6 w-full">
                        <div
                            className={`flex flex-col rounded-lg md:h-24 md:w-36 w-28 h-20  gap-2 justify-center items-center cursor-pointer ${activeTab === 'flashcard' ? 'border-b-4 border-red-500 bg-white ' : 'bg-white hover:border-b-4 hover:border-red-500'
                                }`}
                            onClick={() => setActiveTab('flashcard')}
                        >
                            <CreditCard />
                            <div className='text-sm'>Thẻ Ghi Nhớ</div>
                        </div>
                        <div
                            className={`flex flex-col rounded-lg md:h-24 md:w-36  w-28 h-20 gap-2 justify-center items-center cursor-pointer ${activeTab === 'quiz' ? 'border-b-4 border-red-500 bg-white ' : 'bg-white hover:border-b-4 hover:border-red-500'
                                }`}
                            onClick={() => setActiveTab('quiz')}
                        >
                            <BookOpen />
                            <div>Học</div>
                        </div>
                    </div>
                    <div className=''>
                        {activeTab === 'flashcard' && <FlashCard />}
                        {activeTab === 'quiz' && <QuizGame />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page