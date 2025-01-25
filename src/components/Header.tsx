"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import RegisterDialog from "./RegisterDiaglog";
export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navItems = [
        { name: "Giới thiệu", path: "/rent" },
        { name: "Khóa học", path: "/tieng-nhat-jlpt" },
        {
            name: "Kanji", path: "/kanji-n5",
            subItems:
                [
                    { name: "Kanji N5", path: "/kanji-n5" },
                    { name: "Kanji N4", path: "/kanji-n4" },
                    // { name: "Kanji N3", path: "/kanji-n3" }
                ]
        },
        { name: "Du học Nhật Bản", path: "/contact" },
        { name: "Tiếng Nhật - Văn hóa", path: "/culture" },
        { name: "Tin tức", path: "/project" },
        { name: "Liên hệ", path: "/contact" },
    ];

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <header
                className={`fixed w-full z-50 top-0 shadow-xl  bg-white left-0 h-20  text-black transition-all duration-300`}
            >
                <div className="container mx-auto gap-6 flex items-center justify-between h-full px-4 sm:px-8 lg:px-16 xl:px-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img src="/chokoLogo2.png" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-8 whitespace-nowrap">
                        {navItems.map((item, index) => (
                            item.subItems ? (
                                <div key={index} className="relative group">
                                    <span className="cursor-pointer text-black hover:text-red-500 text-sm sm:text-base lg:text-lg transition-colors duration-200">
                                        {item.name}
                                    </span>
                                    <div className="absolute left-0 hidden group-hover:block bg-white shadow-md">
                                        <ul>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                                                    <Link href={subItem.path}>
                                                        <span>{subItem.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link key={index} href={item.path}>
                                    <span className="cursor-pointer text-black hover:text-red-500 text-sm sm:text-base lg:text-lg transition-colors duration-200">
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Hotline and Button */}
                    <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
                        <div className="text-red-600 font-bold flex items-center text-xs sm:text-sm lg:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M2.1 4.93a10.43 10.43 0 016.38-3.58 9.88 9.88 0 015.85.59 1.43 1.43 0 01.79 1.26c-.06.83-.3 1.66-.64 2.44a1.45 1.45 0 01-1.14.86 7.37 7.37 0 01-1.72.2c-.93.02-1.86.05-2.79.06a1.26 1.26 0 01-1.06-.59c-.34-.5-.77-.97-1.15-1.45-.5-.66-.88-1.39-1.33-2.08a1.38 1.38 0 00-.45-.45z" />
                            </svg>
                            Hotline: 0362980029
                        </div>
                        <RegisterDialog />
                    </div>
                    <button onClick={toggleSidebar} className="md:hidden mr-2 sm:mr-4" aria-label="Open Sidebar">
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </button>
                </div>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeSidebar}
                    ></div>
                )}

                <div
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
                            <li key={index} className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300">
                                <Link href={item.path}>
                                    <span
                                        onClick={closeSidebar}
                                        className="block px-2 py-1 rounded-md text-lg font-medium hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                                {item.subItems && (
                                    <ul className="ml-4 space-y-2 mt-2">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="px-4 py-2 hover:bg-gray-200">
                                                <Link href={subItem.path}>
                                                    <span onClick={closeSidebar} className="block text-sm">
                                                        {subItem.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}
