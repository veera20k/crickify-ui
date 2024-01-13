'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notFound, useRouter } from "next/navigation";
import Commentary from "./Commentary";
import ScoreTable from "./ScoreTable";
import { useEffect, useState } from "react";
import { MatchDetails } from "@/types/Match";
import MainContentSkelton from "./MainContentSkelton";
import MatchLiveScoreInfo from "./MatchLiveScoreInfo";

export default function MatchHeader(props: { matchId: string, seriesId: string, tab: string, playing11Cmp: React.ReactNode, venueCmp: React.ReactNode }) {
    const { matchId, seriesId, tab, playing11Cmp, venueCmp } = props;
    const router = useRouter();
    const tabClass = "cursor-pointer p-2 data-[state=active]:border-b-2 data-[state=active]:border-green-500";
    const [matchDetails, setMatch] = useState<MatchDetails | null>(null);
    const [initialLoaded, setInitialLoaded] = useState(false);

    if (!matchId || !seriesId) {
        return notFound();
    }

    const updateTab = (tab: string) => {
        router.push(`/${matchId}?seriesId=${seriesId}&tab=${tab}`)
    }

    if (!tab) {
        updateTab('commentary');
    }

    const fetchMatch = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/match/${matchId}?seriesId=${seriesId}`);
            if (!response.ok) {
                console.error('Failed to fetch data');
                return;
            }
            const data: MatchDetails = await response.json();
            setMatch(data);
        } catch (error) {
        } finally {
            if (!initialLoaded) {
                setInitialLoaded(true);
            }
        }
    };

    useEffect(() => {
        fetchMatch();
        const intervalId = setInterval(fetchMatch, 10000);
        return () => clearInterval(intervalId);
    }, [])
    return <>
     {!initialLoaded ? <MainContentSkelton /> : <MatchLiveScoreInfo match={matchDetails?.match} supportInfo={matchDetails?.supportInfo} />}   
        <Tabs defaultValue={tab} className="mt-2" onValueChange={(triggeredTab) => updateTab(triggeredTab)}>
            <TabsList className="gap-5 flex justify-center">
                <TabsTrigger value="commentary" className={tabClass}>Commentary</TabsTrigger>
                <TabsTrigger value="scorecard" className={tabClass}>Scorecard</TabsTrigger>
                <TabsTrigger value="venue" className={tabClass}>Venue</TabsTrigger>
                <TabsTrigger value="playing11" className={tabClass}>playing 11</TabsTrigger>
            </TabsList>
            <TabsContent value="commentary"><Commentary /></TabsContent>
            <TabsContent value="scorecard">{!!matchDetails?.scorecard && <ScoreTable scoreTable={matchDetails?.scorecard} matchType={matchDetails?.match?.format} />}</TabsContent>
            <TabsContent value="venue">{venueCmp}</TabsContent>
            <TabsContent value="playing11">{playing11Cmp}</TabsContent>
        </Tabs>
    </>
}
