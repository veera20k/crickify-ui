import { getRandomColor } from '@/lib/utils';
import { Article } from '@/types/News'
import Image from 'next/image';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export default function NewsCard(props: { news: Article }) {
    const baseImgUrl = 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/';
    const formattedDate = new Date(props.news.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    const randomColor = getRandomColor();
    return (
        <Link href={`/news/${props.news.id}`}>
         <div className="max-w-sm md:max-w-xs border border-gray-200 rounded-xl cursor-pointer hover:bg-slate-100">
            <div className="p-4" >
                <Image className='rounded-xl' height={props.news.image.height} width={props.news.image.width} src={baseImgUrl + props.news.image.url} alt="" 
                />
            </div>
            <div className="px-5 pt-1 py-5">
            <Badge style={{ color: randomColor }} className='bg-blue-50 mb-2'>{props.news.genreType}</Badge>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{props.news.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{props.news.summary}</p>
                <div className='flex justify-between'>
                    <span style={{ color: randomColor }}>{props.news.byline}</span> <span>{formattedDate}</span>
                </div>
            </div>
        </div>
        </Link>
    )
}
