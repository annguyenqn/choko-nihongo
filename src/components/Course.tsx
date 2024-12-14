import React from 'react';

function Course() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url('/bg-course.svg')`, // Đường dẫn file SVG trong thư mục public
            }}
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-red-500">KHÓA HỌC TIẾNG NHẬT</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {[
                    {
                        title: 'Tiếng Nhật luyện thi JLPT',
                        description: 'Tiếng Nhật luyện thi JLPT N5-N1',
                        img: '/duhocDaiHoc1.jpg', // Đường dẫn đến ảnh
                    },
                    {
                        title: 'Tiếng Nhật chuyên sâu - Khóa học CN',
                        description: 'Tiếng Nhật chuyên biệt - Khóa học Kobetsu',
                        img: '/duhocDaiHoc2.jpg',
                    },
                    {
                        title: 'Khóa học Hội thoại vui vẻ - HK',
                        description: 'Khóa học Happy Kaiwa - Tiếng Nhật Giao tiếp cho trẻ từ 8 tuổi trở lên',
                        img: '/duhocDaiHoc3.jpg',
                    },
                    {
                        title: 'Tiếng Nhật toàn diện - Khóa học CN',
                        description: 'Khóa học CN - Ôn thi Chuyên Nhật dành cho học sinh Trung học Cơ sở',
                        img: '/duhocDaiHoc4.jpg',
                    },
                ].map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
                    >
                        <img
                            src={course.img}
                            alt={course.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex-grow">
                            <h2 className="text-lg font-bold mb-2">{course.title}</h2>
                            <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                        <div className="p-4">
                            <button className="flex items-center justify-center w-full px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                                <span className="mr-2">👤</span> Xem chi tiết
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Course;
