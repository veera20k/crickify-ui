import MatchHeader from "@/components/Match/MatchHeader";
import Playing11 from "@/components/Match/Playing11";
import Venue from "@/components/Match/Venue";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    seriesId: string;
    tab: string;
  };
}

export default function page(props: PageProps) {
  const { params: { id }, searchParams: { seriesId, tab } } = props;
  const commonProps = {
    matchId: id,
    seriesId,
  };

  return <div className="mx-2 md-3 md:mt-5 md:mx-4">
    <MatchHeader
      {...commonProps}
      tab={tab}
      playing11Cmp={<Playing11 {...commonProps} />} //server component
      venueCmp={<Venue groundId={id} />} //server component
    >
    </MatchHeader>
  </div>
}
