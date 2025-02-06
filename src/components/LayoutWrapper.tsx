"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QandA from "@/components/QandA";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Nếu là trang login thì chỉ hiển thị Footer
    const isLoginPage = pathname === "/login";

    return (
        <>
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <QandA />}
            <Footer />
        </>
    );
}
