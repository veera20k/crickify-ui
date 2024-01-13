import Link from 'next/link';
import ScoreCard from './ScoreCard/ScoreCard';
import { MatchInfo } from '@/types/Match';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ScoreDashboard = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/match/list`, {
        cache: 'no-store'
    });
    const matches: { forYou: MatchInfo[], others: MatchInfo[] } = await res.json();
    return (
        <>
            <Tabs defaultValue={'forYou'} className="w-full">
                <TabsList className="gap-5 flex justify-center">
                    <TabsTrigger value="forYou" className='cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-green-500'>For You</TabsTrigger>
                    <TabsTrigger value="more" className='cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-green-500'>More</TabsTrigger>
                </TabsList>
                <TabsContent value="forYou" className='flex flex-wrap'>
                    <Cards matches={matches.forYou} />
                </TabsContent>
                <TabsContent value="more" className='flex flex-wrap'>
                    <Cards matches={matches.others} />
                </TabsContent>
            </Tabs>
            {/* <RouterRefreshClient /> */}
        </>
    );
};

export default ScoreDashboard;


function Cards({ matches }: { matches: MatchInfo[] }) {
    return <>
        {!!matches && matches.map((match) => (
            <Link href={`/${match.objectId}?seriesId=${match.series.objectId}&tab=commentary`} key={match.objectId} className="score-card w-full xs:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 page-transition-fadeInUp">
                <ScoreCard match={match} />
            </Link>
        ))}</>;
}
