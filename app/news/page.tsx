import NewsList from '@/components/News/NewsList';
import { Suspense } from 'react';

export default function page() {
    return (
        <Suspense fallback={<div>my loading...</div>}>
            <NewsList />
        </Suspense>
    )
}
