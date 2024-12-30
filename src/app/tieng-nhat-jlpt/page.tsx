import React from 'react'
import JlptContent from '@/components/JlptContent'
function page() {
    return (
        <>
            <div
                className="min-h-96 w-full bg-cover bg-center flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url('/bg-header.svg')`,
                }}
            >
                <div className='text-red-600 text-3xl font-semibold mt-16'>Tiếng Nhật Luyện Thi JLPT</div>
            </div>
            <div className='bg-white h-auto py-20'>
                <JlptContent />
            </div>
        </>
    )
}

export default page