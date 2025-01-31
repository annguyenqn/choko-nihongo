'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { KanjiItem } from '@/interface/IKanjiItem';
export default function KanjiHome() {
    const lessons = [35, 36]; // Có thể thay bằng danh sách động từ API
    const [kanji, setKanji] = useState<KanjiItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchKanji = async () => {
            try {
                console.log('Fetching posts from API...');

                const res = await fetch(`/api/kanji?lesson=36`);

                // Kiểm tra nếu API trả về lỗi
                if (!res.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await res.json();

                // Log dữ liệu đã nhận từ API
                console.log('Fetched Posts:', data);

                setKanji(data);
            } catch (error) {
                // Log lỗi nếu có
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchKanji();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Danh sách các bài Kanji N4</h1>
            <ul className="mt-4">
                {lessons.map((lesson) => (
                    <li key={lesson} className="mt-2">
                        <Link href={`/kanji/${lesson}`} className="text-blue-600 hover:underline">
                            Bài {lesson}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
