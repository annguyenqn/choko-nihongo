"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs } from './ui/tabs';
import React from 'react'
const tabs = [
    {
        title: "N5",
        value: "n5",
        content: (
            <ScrollArea className="w-full overflow-hidden relative h-[100%] md:h[80%] shadow-xl  rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-[#f3f3f3] border-red-600 solid ">
                <p className="text-xl md:text-4xl font-bold  mb-4">Chương Trình N5</p>
                {/* <img src='/n5.png'></img> */}
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
            </ScrollArea>
        ),
    },
    {
        title: "N4",
        value: "n4",
        content: (
            <ScrollArea className="w-full overflow-hidden relative h-[100%] md:h[80%] shadow-xl  rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-[#f3f3f3] border-red-600 solid ">
                <p className="text-xl md:text-4xl font-bold  mb-4">Chương Trình N4</p>
                {/* <img src='/n5.png'></img> */}
                <div className="text-base md:text-lg font-medium leading-relaxed">
                    <p><strong>Mục tiêu khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Có thể viết khoảng 80 ký tự Kanji (tương đương chương trình của học sinh cấp 1 ở Nhật).</li>
                        <li>Biết cách viết nhật ký với những cảm xúc, suy nghĩ và những câu đối thoại.​</li>
                        <li>Có sử dụng tiếng Nhật 100% trong lớp học tiếng Nhật​​.​</li>
                        <li>Hiểu được nội dung các cuốn ehon (sách ảnh trẻ em)..​</li>
                        <li>Có thể sử dụng tiếng Nhật để nói về những điều mình muốn làm trong tương lai.​</li>
                    </ul>
                    <p className="mt-4"><strong>Nội dung khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Nắm được các mẫu câu &quot;Tôi nghĩ là…&quot;, trích dẫn trực tiếp & gián tiếp.</li>
                        <li>Luyện tập nghe hiểu (theo kịp tốc độ tự nhiên của người Nhật Bản).​</li>
                        <li>Đọc sách tranh ảnh bản quyền của TODAI (dành cho người học tiếng Nhật); sách tranh cho trẻ nhỏ của Nhật.;...</li>
                    </ul>
                </div>
            </ScrollArea>
        ),
    },
    {
        title: "N3",
        value: "n3",
        content: (
            <ScrollArea className="w-full overflow-hidden relative h-[100%] md:h[80%] shadow-xl  rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-[#f3f3f3] border-red-600 solid ">
                <p className="text-xl md:text-4xl font-bold  mb-4">Chương Trình N3</p>
                {/* <img src='/n5.png'></img> */}
                <div className="text-base md:text-lg font-medium leading-relaxed">
                    <p><strong>Mục tiêu khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Nắm được các kiến thức nền tảng về từ vựng - Ngữ pháp – Kanji - Nghe hiểu - Đọc hiểu tương đương với trình độ N3.</li>
                        <li>Nắm được cách làm các dạng bài xuất hiện trong đề thi N3.​</li>
                        <li>Đạt 95/180 điểm JLPT N3.​</li>

                    </ul>
                    <p className="mt-4"><strong>Nội dung khóa học:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Nhớ được ý nghĩa, cách dùng của 880 từ vựng N3.​</li>
                        <li>Nhớ được mặt chữ, cách đọc âm On, âm Kun, các ví dụ liên quan của 400 chữ Kanji​.</li>
                        <li>Nắm được ý nghĩa và cách dùng của 100 ngữ pháp N3.</li>
                        <li>Làm quen với các dạng bài đọc hiểu​.</li>
                        <li>Làm quen với các dạng bài nghe hiểu​.</li>
                    </ul>
                </div>
            </ScrollArea>
        ),
    },
    // {
    //     title: "N2",
    //     value: "n2",
    //     content: (
    //         <div className="w-full overflow-hidden relative h-full shadow-xl  rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-[#f3f3f3] ">
    //             <p className="text-xl md:text-4xl font-bold  mb-4">Chương Trình N2</p>
    //             {/* <img src='/n5.png'></img> */}
    //             <div className="text-base md:text-lg font-medium leading-relaxed">
    //                 <p><strong>Mục tiêu khóa học:</strong></p>
    //                 <ul className="list-disc pl-5">
    //                     <li>Nắm được phương pháp, kỹ năng xử lý các dạng bài một cách thông minh.</li>
    //                     <li>Nắm được chiến lược phân bổ thời gian, rèn luyện quan 5 đề thi các năm.​</li>
    //                     <li>Nắm được chiến lược phân bổ thời gian, rèn luyện quan 5 đề thi các năm.​</li>

    //                 </ul>
    //                 <p className="mt-4"><strong>Nội dung khóa học:</strong></p>
    //                 <ul className="list-disc pl-5">
    //                     <li>Nhớ được cách đọc, cách viết của 2 bảng chữ cái Hiragana và Katakana.</li>
    //                     <li>Nhớ và biết cách sử dụng khoảng 1000 từ vựng chủ đề danh từ, động từ, tính từ,..</li>
    //                     <li>Nhớ được cách đọc, cách viết của 110 chữ Hán.</li>
    //                     <li>Nhớ và áp dụng được 60 mẫu ngữ pháp: câu danh từ, câu tính từ, các thể động từ và cấu trúc liên quan.</li>
    //                     <li>Làm quen với các bài nghe, bài đọc ngắn, các chủ đề quen thuộc với cuộc sống.</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     ),
    // },
];
function JlptContent() {
    return (
        <>
            <div

                className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
                <Tabs tabs={tabs} />
            </div>
        </>
    )
}

export default JlptContent