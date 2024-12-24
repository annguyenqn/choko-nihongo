import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
const testimonials = [
    {
        quote: "Trung tâm này thực sự tuyệt vời! Giáo viên rất nhiệt tình và dạy rất dễ hiểu.",
        name: "Minh Anh",
        title: "Học viên lớp N5",
        avatar: "https://example.com/avatar1.jpg",
    },
    {
        quote: "Môi trường học tập thân thiện và đội ngũ giáo viên rất chuyên nghiệp. Tôi rất hài lòng với chương trình học ở đây.",
        name: "Tuấn Kiệt",
        title: "Học viên lớp N3",
        avatar: "https://example.com/avatar2.jpg",
    },
    {
        quote: "Tôi đã có cơ hội giao lưu với các bạn học viên quốc tế, điều này giúp tôi cải thiện khả năng giao tiếp tiếng Nhật rất nhiều.",
        name: "Quang Huy",
        title: "Học viên lớp N1",
        avatar: "https://example.com/avatar4.jpg",
    },
    {
        quote: "Chương trình học ở đây rất toàn diện, từ ngữ pháp đến kỹ năng nghe, nói, đọc, viết.",
        name: "Thị Lan",
        title: "Học viên lớp N4",
        avatar: "https://example.com/avatar5.jpg",
    },
];
function Review() {
    return (
        <>
            <div
                // style={{
                //     backgroundImage: `url('/bg-course.svg')`,
                // }}
                className="h-[40rem] rounded-md flex flex-col  antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </>
    )
}

export default Review