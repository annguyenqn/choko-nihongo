"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
const Pagination = ({ totalItems }: { totalItems: number }) => {
    const [currentItem, setCurrentItem] = useState(1); // Khởi tạo currentItem là 1
    const totalItemsCount = totalItems;

    const handleNextItem = () => {
        if (currentItem < totalItemsCount) {
            setCurrentItem(currentItem + 1); // Tăng currentItem lên 1
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={() => currentItem > 1 && setCurrentItem(currentItem - 1)}
                disabled={currentItem === 1}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
            >
                <ArrowLeft />
            </button>
            <span className="text-lg">
                {currentItem} / {totalItemsCount}
            </span>
            <button
                onClick={handleNextItem}
                disabled={currentItem === totalItemsCount}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
