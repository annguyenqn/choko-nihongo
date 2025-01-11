import React from 'react';
import { MapPinHouse, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg-course.svg')" }}
        >
            {/* Header Section */}
            <div className="text-center py-9 text-black">
                <h2 className="text-2xl font-bold mb-2">Liên hệ với chúng tôi</h2>
                <p className='mx-3'>
                    Choko sẵn sàng giải đáp mọi thắc mắc của bố, mẹ và con. Hãy kết nối với Choko
                    nhé!
                </p>
                <div className="flex md:flex-row flex-col justify-center items-center mt-4 gap-4">
                    <div className="bg-white w-56 rounded-md px-4 py-2 text-red-600 font-semibold shadow-md text-sm md:text-base">
                        ☎ Hotline: 0989266636
                    </div>
                    <div className="bg-white w-56 rounded-md px-4 py-2 text-red-600 font-semibold shadow-md text-sm md:text-base">
                        💬 Zalo: 0989266636
                    </div>
                    <div className="bg-white w-56 rounded-md px-4 py-2 text-red-600 font-semibold shadow-md text-sm md:text-base">
                        📋 Học thử miễn phí
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-white text-gray-800 py-8">
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:ml-5 md:items-start">
                        <img
                            src="/chokoLogo2.png"
                            alt="Logo"
                            className="w-20 h-28 md:w-20 md:h-28 mb-4"
                        />
                        <div className="flex flex-col ml-2 md:ml-0 gap-4 text-sm md:text-base">
                            <p className="flex gap-4 items-start">
                                <MapPinHouse className="text-red-500" />
                                <span>
                                    Địa chỉ: 05 Yết Kiêu, Nguyễn Văn Cừ, Quy Nhơn, Bình Định, Việt Nam
                                </span>
                            </p>
                            <p className="flex gap-4 items-center">
                                <Phone className="text-red-500" /> 0989266636
                            </p>
                            <p className="flex gap-4 items-center">
                                <Mail className="text-red-500" />
                                tiengnhattreem@todaiedu.com
                            </p>
                            <p className="flex gap-4 items-center">
                                <Clock className="text-red-500" /> Thứ 2 - Thứ 7: 08h00 - 20h00
                            </p>
                            <p className="font-bold">Kết nối với chúng tôi qua</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/tiengnhatchoko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                                    aria-label="Visit Choko Japanese Language Facebook Page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="white"
                                    >
                                        <path d="M11.99 0C5.37 0 0 5.37 0 11.99c0 5.92 4.3 10.91 9.95 11.88V14.45h-3v-2.95h3v-2.2c0-3.06 1.75-4.75 4.54-4.75 1.32 0 2.7.25 2.7.25v3h-1.5c-1.48 0-1.96.92-1.96 1.86v2.1h3.3l-.53 2.95h-2.76v9.41c5.64-.97 9.93-5.87 9.93-11.88 0-6.62-5.37-11.99-11.99-11.99z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://zalo.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                                    aria-label="Contact Zalo Choko Japanese Language"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                        <path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Google Map */}
                    <div className="w-full md:w-1/2 ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.87742351790564!2d109.21178191586367!3d13.752077566847161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6cdd58737a7f%3A0x998a9a6e585aa86d!2zMDUgWeG6v3QgS2nDqnUsIE5ndXnhu4VuIFbEg24gQ-G7qywgUXV5IE5oxqFuLCBCw6xuaCDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1734797222387!5m2!1svi!2s"
                            width="100%"
                            height="400"
                            loading="lazy"
                            title="Google Maps Location"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
