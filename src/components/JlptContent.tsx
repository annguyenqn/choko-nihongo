"use client";

import { Tabs } from './ui/tabs';
import React from 'react'
const tabs = [
    {
        title: "N5",
        value: "n5",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-[#fae7e7] ">
                <p className="text-xl md:text-4xl font-bold mb-4">Chương Trình N5</p>
                <div className="text-base md:text-lg font-medium leading-relaxed">
                    <p><strong>Mục tiêu khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Nắm được các kiến thức nền tảng về từ vựng - Ngữ pháp – Kanji - Nghe hiểu - Đọc hiểu tương đương với trình độ N5​.</li>
                        <li>Hình thành năng lực sử dụng tiếng Nhật để hội thoại, viết tập làm văn,...​</li>
                    </ul>
                    <p className="mt-4"><strong>Nội dung khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Nhớ được cách đọc, cách viết của 2 bảng chữ cái Hiragana và Katakana.</li>
                        <li>Nhớ và biết cách sử dụng khoảng 1000 từ vựng chủ đề danh từ, động từ, tính từ,..</li>
                        <li>Nhớ được cách đọc, cách viết của 110 chữ Hán.</li>
                        <li>Nhớ và áp dụng được 60 mẫu ngữ pháp: câu danh từ, câu tính từ, các thể động từ và cấu trúc liên quan.</li>
                        <li>Làm quen với các bài nghe, bài đọc ngắn, các chủ đề quen thuộc với cuộc sống.</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "N4",
        value: "n4",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-500">
                <p>Chương Trình N4</p>
            </div>
        ),
    },
    {
        title: "N3",
        value: "n3",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-500">
                <p>Chương Trình N3</p>
            </div>
        ),
    },
    {
        title: "N2",
        value: "n2",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-500">
                <p>Chương Trình N2</p>
            </div>
        ),
    },
];
function JlptContent() {
    return (
        <>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
                <Tabs tabs={tabs} />
            </div>
        </>
    )
}

export default JlptContent