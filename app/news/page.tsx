import NewsCard from '@/components/News/NewsCard';
import { Article } from '@/types/News';
import { Suspense } from 'react';

export default async function page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list/1`, {
        next: {
            revalidate: 3600
        }
    });
    if (!response.ok) {
        return <div>Nodata</div>
    }
    const newsList: Article[] = await response.json();
    return (
        <div className="p-2 rounded-xl w-full mx-auto mt-8 flex flex-wrap gap-4 justify-center page-transition-fadeInUp">
            <Suspense fallback={<div>my loading...</div>}>
            {newsList?.map((news: Article) => (
                <NewsCard key={news.id} news={news} />
            ))}
            </Suspense>
        </div>
    )
}
