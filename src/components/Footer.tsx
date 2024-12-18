import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-course.svg')" }}>
            {/* Header Section */}
            <div className="text-center py-9 text-black">
                <h2 className="text-2xl font-bold mb-2">Liên hệ với chúng tôi</h2>
                <p>Choko sẵn sàng giải đáp mọi thắc mắc của bố, mẹ và con. Hãy kết nối với Choko nhé!</p>
                <div className="flex justify-center mt-4 gap-4">
                    <div className="bg-white rounded-md px-4 py-2 text-red-600 font-semibold shadow-md">
                        ☎ Hotline: 0989266636
                    </div>
                    <div className="bg-white rounded-md px-4 py-2 text-red-600 font-semibold shadow-md">
                        💬 Zalo: 0989266636
                    </div>
                    <div className="bg-white rounded-md px-4 py-2 text-red-600 font-semibold shadow-md">
                        📋 Học thử miễn phí
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-white text-gray-800 py-8">
                <div className="flex justify-center gap-9">
                    <div className="flex flex-col items-center ">
                        <img src="/chokoLogo2.png" alt="Logo" className="w-20 h-28 mb-2" />
                        {/* <h3 className="text-lg font-bold text-red-600">CHOKO NIHONGO</h3> */}
                        <p className="text-sm text-center">
                            📍 Địa chỉ: 05 Yết Kiêu, Nguyễn Văn Cừ, Quy Nhơn, Bình Định, Việt Nam
                        </p>
                        <p className="text-sm">☎ 0989266636</p>
                        <p className="text-sm">✉ tiengnhattreem@todaiedu.com</p>
                        <p className="text-sm">⏰ Thứ 2 - Thứ 7: 08h00 - 20h00</p>
                    </div>
                    <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.443408174695!2d109.2092266757315!3d13.752113097284917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6cdd58737a7f%3A0x998a9a6e585aa86d!2zMDUgWeG6v3QgS2nDqnUsIE5ndXnhu4VuIFbEg24gQ-G7qywgUXV5IE5oxqFuLCBCw6xuaCDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1734530791397!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
