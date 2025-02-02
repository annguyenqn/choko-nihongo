'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { KanjiItem } from '@/interface/IKanjiItem';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
export default function KanjiHome() {
    const lessons = Array.from({ length: 50 }, (_, i) => i + 1);
    const [kanji, setKanji] = useState<KanjiItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchKanji = async () => {
            try {
                console.log('Fetching posts from API...');

                const res = await fetch(`/api/kanji?lesson=36`);

                if (!res.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await res.json();

                console.log('Fetched Posts:', data);

                setKanji(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchKanji();
    }, []);

    if (loading) {
        return (
            <div className="p-6 pt-24">
                <Card className="mb-8">
                    <CardHeader>
                        <div className="skeleton-header w-2/3 h-6 bg-gray-300 rounded-md"></div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {/* Skeleton for the buttons */}
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson}
                                    className="skeleton-button bg-gray-300 w-48 h-10 rounded-lg animate-pulse"
                                ></div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <>
            <div
                className="min-h-96 w-full bg-cover bg-center bg-[#fae7e7] flex items-center justify-center relative"
            >
                <Image
                    className="absolute bottom-0 left-0 hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />
                <div className="text-red-600 text-3xl font-semibold z-10 mt-10 text-center">
                    Luyện Kanji Theo Bài
                </div>
                <Image
                    className="absolute bottom-0 right-0 transform scale-x-[-1] hidden md:block"
                    src="/tem.svg"
                    width={620}
                    height={620}
                    alt="temple"
                />
            </div>
            <div className="p-6">
                <Card className="mb-8 py-10">
                    <CardHeader>
                        <h1 className="text-3xl font-semibold text-center mb-3">Danh sách các bài Kanji</h1>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {lessons.map((lesson) => (
                                <Link key={lesson} href={`/kanji/${lesson}`} passHref>
                                    <Button
                                        as="a"
                                        className="bg-red-500 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-lg w-48 py-2 text-center"
                                    >
                                        Bài {lesson}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>

    );
}
