import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
export const KeysBenefits = [
    {
        title: "KHÔNG NGỪNG HỌC TẬP",
        description:
            "Tại Choko các học viên không ngừng học tập và phát triển trở thành một phiên bản tốt hơn",
        icon: "book",
    },
    {
        title: "SÁNG TẠO, KHÁM PHÁ",
        description:
            "Các học viên luôn được thúc đẩy để sáng tạo và khám phá những điều mới trên thế giới",
        icon: "Lightbulb",
    },
    {
        title: "TRÁCH NHIỆM",
        description:
            "Tại Choko nơi trách nhiệm được ưu tiên hàng đầu, đảm bảo các học viên có được tiếp cận những phương pháp học tốt nhất",
        icon: "UserCheck",
    },
    {
        title: "LÒNG BIẾT ƠN",
        description:
            "Choko luôn biết ơn những học viên đã tin tưởng và lựa chọn Choko trở thành một cộng sự tin cậy trên con đường phát triển bản thân",
        icon: "Heart",
    },
    {
        title: "PHIÊN BẢN TỐT NHẤT",
        description:
            "Đi cùng bạn Choko giúp bạn ngày càng phát triển và trở thành phiên bản tốt nhất của chính mình",
        icon: "Award",
    },
    {
        title: "CHUYÊN NGHIỆP",
        description:
            "Đi kèm với trách nhiệm là sự chuyên nghiệp, Choko luôn cố gắng có thể mang lại dịch vụ tốt nhất và chuyên nghiệp nhất",
        icon: "Briefcase",
    },
];
function KeysBenefit() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={KeysBenefits} />
            </div>
        </>
    )
}

export default KeysBenefit