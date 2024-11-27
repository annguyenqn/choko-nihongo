"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
    // const [isMounted, setIsMounted] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const navItems = [
        { name: "Giới thiệu", path: "/rent" },
        { name: "Khóa học", path: "/purchase" },
        { name: "Trải nghiệm Nhật Bản", path: "/trainghiem" },
        { name: "Du học Nhật Bản", path: "/contact" },
        { name: "Tin tức", path: "/project" },
        { name: "Liên hệ", path: "/contact" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            // Kiểm tra nếu người dùng cuộn xuống khỏi vị trí ban đầu
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={`bg-white text-black fixed w-full z-50 top-0 start-0 h-28 border-b ${isScrolled ? "shadow-lg" : "border-gray"
                } transition-shadow duration-300`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  h-28 ">
                <img
                    src="/logochoko-3.png"
                    className="h-24 object-contain"
                    alt="Flowbite Logo"
                />
                <div className="flex md:order-2 space-x-3  md:space-x-0 rtl:space-x-reverse">

                    {/* <Link
                            href={"/auth/login"}
                            type="button"
                            className="text-black bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Đăng nhập
                        </Link> */}
                    <Button
                        onClick={toggleSidebar}
                        className=" md:hidden flex items-center justify-center px-2 bg-white focus:bg-primary"
                    >
                        <Menu className="w-6 h-6 bg-white text-black" />
                    </Button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  border border-gray-100 rounded-lg bg-white md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-whit">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <div className=" hover:bg-blue-100 w-auto px-5 h-10 flex justify-center items-center rounded-lg">
                                    <Link
                                        href={item.path}
                                        className={`block py-2 px-3  md:bg-transparent md:p-0  ${pathname == item.path ? "text-primary " : ""
                                            }`}
                                        aria-current="page"
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeSidebar}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full w-48 bg-white text-black z-30 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
            >
                <div className="flex justify-around p-4">
                    <div className="mr-10">
                        <a href="/" className="flex items-center  rtl:space-x-reverse">
                            <img
                                src="/chokoLogo2.png"
                                className="h-32"
                                alt="Flowbite Logo"
                            />
                        </a>
                    </div>
                    <button onClick={closeSidebar} className="text-black">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col items-center mt-8 text-black">
                    <div className="py-2 px-4 border-b-2 hover:bg-primary-hover hover:text-black w-full">
                        <a href="#">Giới thiệu</a>
                    </div>
                    <div className="py-2 px-4 border-b-2 hover:bg-primary-hover hover:text-black w-full">
                        <a href="#">Khóa học</a>
                    </div>
                    <div className="py-2 px-4 border-b-2 hover:bg-primary-hover hover:text-black w-full">
                        <a href="#">Tin tức</a>
                    </div>
                    <div className="py-2 px-4 border-b-2 hover:bg-primary-hover hover:text-black w-full">
                        {" "}
                        <a href="#">Liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
