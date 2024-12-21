'use client'
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function RegisterDialog() {
    return (
        <Dialog>
            <DialogTrigger className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700">Nhận báo giá</DialogTrigger>
            {/* <DialogContent style={{ backgroundImage: "url('/DuHocChoko.svg')" }} className="max-w-6xl p-0 overflow-hidden rounded-lg"> */}
            <div className="flex justify-center">
                {/* Hình ảnh bên trái */}
                {/* <div className="hidden md:block">
                        <img
                            src="/mountain-view.jpg"
                            alt="anh bia"
                            className="w-full h-full object-cover"
                        />
                    </div> */}
                <DialogContent className="p-6 w-1/2 bg-white my-6">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-red-500 text-center">
                            NHẬN THÔNG TIN BÁO GIÁ
                        </DialogTitle>
                        <p className="text-sm text-center text-gray-500">
                            Quý khách vui lòng điền đúng thông tin bên dưới, chúng tôi sẽ gọi lại trong giây phút.
                        </p>
                    </DialogHeader>
                    <form className="mt-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập họ tên"
                            />
                        </div>
                        {/* Điện thoại */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Điện thoại</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 ">Tuổi</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nhập số tuổi"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung tư vấn</label>
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
                                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                            >
                                YÊU CẦU GỌI LẠI
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </div>
            {/* </DialogContent> */}
        </Dialog>
    );
}

export default RegisterDialog;
