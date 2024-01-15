import NewsCard from '@/components/News/NewsCard';
import { Article } from '@/types/News';

export default async function NewsList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list/1`);
    if (!response.ok) {
        return <div>Nodata</div>
    }
    const newsList: Article[] = await response.json();
    return (
        <div className="p-2 rounded-xl w-full mx-auto mt-8 flex flex-wrap gap-4 justify-center page-transition-fadeInUp">
            {Array.isArray(newsList) && newsList.map((news: Article) => (
                <NewsCard key={news.id} news={news} />
            ))}
        </div>
    )
}

