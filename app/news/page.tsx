import NewsList from '@/components/News/NewsList';
import PageLoader from '@/components/ui/page-loader';
import { Suspense } from 'react';

export default function page() {
    return (
        <Suspense fallback={<PageLoader/>}>
            <NewsList />
        </Suspense>
    )
}
