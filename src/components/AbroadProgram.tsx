
import React from 'react'
import Image from 'next/image'
import { Timeline } from './ui/timeline'
function AbroadProgram() {
    const data = [
        {
            title: "DU HỌC TRƯỜNG TIẾNG NHẬT",
            content: (
                <div>
                    <p className="text-pink-800  text-base md:text-lg font-normal mb-8">
                        Hiện nay Choko liên kết với hơn 200 Trường Tiếng Nhật đạt chuẩn chất lượng cao, giúp bạn có nhiều lựa chọn đa dạng về địa điểm, chương trình học và chi phí, phù hợp với từng nhu cầu và khả năng của mỗi người. Từ đó, các bạn dễ dàng nắm vững kiến thức tiếng Nhật và có cơ hội học lên các chương trình cao hơn hoặc tìm việc làm tốt tại Nhật Bản.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/duhocNhat1.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/duhocNhat2.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "DU HỌC ĐẠI HỌC, CAO ĐẲNG BẰNG TIẾNG NHẬT",
            content: (
                <div>
                    <p className="text-pink-800   text-base md:text-lg font-normal mb-8">
                        Với trình độ N2 và kết quả EJU tốt, bạn hoàn toàn có thể ứng tuyển vào nhiều trường đại học danh tiếng tại Nhật Bản, lựa chọn đa dạng các ngành học phù hợp với sở thích và năng lực của mình. Không chỉ vậy, cơ hội việc làm sau khi tốt nghiệp cũng vô cùng rộng mở, cùng với đó là nhiều suất học bổng hấp dẫn giúp bạn giảm bớt gánh nặng tài chính.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/duhocDaiHoc3.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/duhocDaiHoc2.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/duhocDaiHoc1.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/duhocDaiHoc4.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "DU HỌC ĐẠI HỌC, CAO ĐẲNG BẰNG TIẾNG ANH",
            content: (
                <div>
                    <p className="text-pink-800   text-base md:text-lg font-normal mb-4">
                        Học viên có lợi thế tiếng Anh, có các chứng chỉ IELTS, TOEFL, TOEIC đáp ứng yêu cầu của các Trường Cao đẳng, đại học, có thể theo học các chuyên ngành được giảng dạy bằng tiếng Anh tại các trường đại học danh tiếng, tăng khả năng cạnh tranh và mở ra nhiều cơ hội nghề nghiệp hấp dẫn trong tương lai.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/duhocEng2.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/duhocEng1.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "DU HỌC ĐIỀU DƯỠNG MIỄN PHÍ 100%",
            content: (
                <div>
                    <p className="text-pink-800   text-base md:text-lg font-normal mb-4">
                        Chương trình học bổng điều dưỡng Nhật Bản 100% là cơ hội vàng dành cho bạn trẻ đam mê ngành Y, được học tập và làm việc tại đất nước Nhật Bản xinh đẹp. Miễn phí hoàn toàn từ khóa học tiếng Nhật đến chuyên ngành điều dưỡng. Tốt nghiệp, bạn sẽ có ngay việc làm ổn định với mức thu nhập hấp dẫn.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/dieuDuong2.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/dieuDuong1.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

export default AbroadProgram