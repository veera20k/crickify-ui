export default async function Playing11(props: {matchId: string, seriesId: string}) {
  const { matchId, seriesId } = props;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/match/playing11/${matchId}/${seriesId}`);
  if(!response.ok) {
    return <div>Failed to fetch data</div>
  }
  const data = await response.json();

  if(Object.keys(data).length === 0) {
    return <div>No data found</div>
  }
  return (
    <>
    </>
  )
}
