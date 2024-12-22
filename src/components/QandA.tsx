import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircleQuestionIcon } from 'lucide-react'
function QandA() {
    return (
        <>
            <div className='flex justify-center gap-9 my-10'>
                <div className='w-1/3'>
                    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='flex justify-start gap-3'>
                                    <span><MessageCircleQuestionIcon className='text-red-500' /></span><p className='font-bold text-lg'>Con Đã học tiếng Nhật thì có thể học chương trình gì?</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col justify-start shadow-red-500/50 border border-red-500 bg-red-50 p-4 rounded-lg '>
                                    <h3 className='text-lg font-bold text-red-600'>Trả lời:</h3>
                                    <p className='text-base'>
                                        Đối với bạn đã từng học tiếng Nhật hoặc đi Nhật về, các con sẽ làm một bài kiểm tra kiến thức đầu vào, gồm có bài viết và bài nói để thầy cô xếp lớp phù hợp với năng lực của con cũng như mục tiêu và định hướng của gia đình.
                                    </p>
                                </div>

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='flex justify-start gap-3'>
                                    <span><MessageCircleQuestionIcon className='text-red-500' /></span><p className='font-bold text-lg'>Chất lượng giáo viên tại ChokoNihongo ?</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col justify-start '>
                                    <h3 className='text-lg font-bold text-red-600'>Trả lời:</h3>

                                    <div className='flex flex-col text-base gap-3 shadow-red-500/50 border border-red-500 bg-red-50 p-4 rounded-lg'>
                                        <p>Tự hào là đơn vị đầu tiên giáo dục Nhật Bản cho trẻ em tại Quy Nhơn, trải qua hơn 7 năm hình thành và phát triển, ChokoNihongo có đội ngũ giáo viên chất lượng, giàu kinh nghiệm, tốt nghiệp từ trường Đại học Ngoại Ngữ và Đại học Quy Nhơn. </p>
                                        <p>Bên cạnh đó, các thầy cô giáo người Nhật giàu nhiệt huyết, yêu trẻ và nhiều phương pháp dạy học sáng tạo trở thành người bạn, người thầy đồng hành cùng các con trong mỗi giờ học thú vị.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='flex justify-start gap-3'>
                                    <span><MessageCircleQuestionIcon className='text-red-500' /></span>
                                    <p className='font-bold text-lg'>Chất lượng đầu ra tại ChokoNihongo ?</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className=''>
                                <div className='flex flex-col justify-start'>
                                    <h3 className='text-lg font-bold text-red-600'>Trả lời:</h3>
                                    <div className='flex flex-col text-base gap-3 shadow-red-500/50 border border-red-500 bg-red-50 p-4 rounded-lg'>
                                        <p>Với mỗi khóa học, ChokoNihongo đều có lộ trình học cụ thể và cam kết chất lượng đầu ra về mục tiêu tiếng Nhật, mục tiêu văn hóa kỷ luật dành cho các em học sinh.</p>
                                        <p>Bên cạnh đó, phụ huynh sẽ nhận được phiếu bảo hành trọn đời, nếu học sinh chưa hoàn thành mục tiêu khóa học thì trung tâm sẽ cho con học lại hoàn toàn không mất phí.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='w-1/3 bg-red-100 flex flex-col py-5 px-5 rounded-lg'>
                    <h3 className='text-red-600 font-bold text-2xl my-5'>NHẬN THÔNG TIN BÁO GIÁ</h3>
                    <form className=" space-y-2">
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label> */}
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập họ tên"
                            />
                        </div>
                        {/* Điện thoại */}
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-2">Điện thoại</label> */}
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-2 ">Tuổi</label> */}
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập số tuổi"
                            />
                        </div>
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung tư vấn</label> */}
                            <input
                                type="text"
                                className="w-full h-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập nội dung tư vấn"
                            />
                        </div>
                        <div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-6 py-2 mt-3 rounded hover:bg-red-700"
                            >
                                YÊU CẦU GỌI LẠI
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default QandA