import React from 'react'
import JlptContent from '@/components/JlptContent'
import Image from 'next/image'
function page() {
    return (
        <>
            <div
                className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative"
            >
                {/* Ảnh bên trái */}
                <Image
                    className="absolute bottom-0 left-0 hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />

                {/* Dòng chữ ở trung tâm */}
                <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">
                    Tiếng Nhật Luyện Thi JLPT
                </div>

                {/* Ảnh bên phải */}
                <Image
                    className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />
            </div>


            {/* <div className='w-full h-80 bg-white'>

            </div> */}
            <div
                className=' h-auto py-20 px-9 flex justify-center items-center gap-5'
            >
                <div>
                    <Image

                        className='mt-6 hidden md:block'
                        src="/nu.svg"
                        width={350}
                        height={350}
                        alt="female"
                    />
                </div>
                <JlptContent />
                <div>
                    <Image
                        className="hidden md:block"
                        src="/nam.svg"
                        width={350}
                        height={350}
                        alt="male"
                    />
                </div>
            </div>
        </>
    )
}

export default page