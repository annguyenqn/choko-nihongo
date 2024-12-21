"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import RegisterDialog from "./RegisterDiaglog";
export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: "Giới thiệu", path: "/rent" },
        { name: "Khóa học", path: "/purchase" },
        { name: "Trải nghiệm Nhật Bản", path: "/trainghiem" },
        { name: "Du học Nhật Bản", path: "/contact" },
        { name: "Tiếng Nhật - Văn hóa", path: "/culture" },
        { name: "Tin tức", path: "/project" },
        { name: "Liên hệ", path: "/contact" },
    ];

    // Lắng nghe sự kiện scroll để thay đổi trạng thái header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle trạng thái sidebar
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <header
                className={`fixed w-full z-50 top-0 left-0 h-20 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} transition-all duration-300`}
            >
                <div className=" mx-auto flex items-center justify-between h-full px-56">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <img src="/chokoLogo2.png" className="h-24 w-24 object-contain" alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <div className="w-auto  flex justify-center ">
                                    <span
                                        className={`cursor-pointer ${isScrolled ? "text-black" : "text-white"} hover:text-primary hover:text-red-500  text-lg transition-colors duration-200`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    {/* Hotline and Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className={`${isScrolled ? "text-red-600" : "text-white"} font-bold flex items-center`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.1 4.93a10.43 10.43 0 016.38-3.58 9.88 9.88 0 015.85.59 1.43 1.43 0 01.79 1.26c-.06.83-.3 1.66-.64 2.44a1.45 1.45 0 01-1.14.86 7.37 7.37 0 01-1.72.2c-.93.02-1.86.05-2.79.06a1.26 1.26 0 01-1.06-.59c-.34-.5-.77-.97-1.15-1.45-.5-.66-.88-1.39-1.33-2.08a1.38 1.38 0 00-.45-.45z" />
                            </svg>
                            Hotline: 0362980029
                        </div>
                        <RegisterDialog />
                        {/* <Button className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700">
                        Học thử miễn phí
                    </Button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleSidebar} className="md:hidden" aria-label="Open Sidebar">
                        <Menu className="w-6 h-6 text-black" />
                    </button>
                </div>

                {/* Sidebar Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeSidebar}
                    ></div>
                )}

                {/* Sidebar */}
                <aside
                    className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
                >
                    <div className="flex justify-between items-center p-4 border-b">
                        <img src="/chokoLogo2.png" className="h-16" alt="Logo" />
                        <button onClick={closeSidebar}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {navItems.map((item, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                <Link href={item.path}>
                                    <span onClick={closeSidebar}>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </header>
        </>
    );
}
