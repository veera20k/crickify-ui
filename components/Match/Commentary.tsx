'use client'

import { Commentary } from "@/types/Match"

export default function Commentary({ commentaries }: { commentaries?: Commentary[] }) {
  if (!commentaries) {
    return <>Commentary Not Available</>;
  }
  return (
    <div>
      {commentaries.map((commentary) => (
        <div key={commentary.id}>
          <div className="flex p-4">
            <div className="">
              {commentary.oversActual}
            </div>
            <div className="ml-4">
              {commentary.title},
              <span className="font-bold">
                {getRunText(commentary)}
              </span>
              <span dangerouslySetInnerHTML={{ __html: commentary.commentTextItems?.[0]?.html }}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function getRunText(commentary: Commentary): string {
  let runText = commentary.totalRuns?.toString();
  if (commentary.legbyes) {
    runText = ` ${runText} leg by  , `
  } else if (commentary.wides) {
    runText = ` ${runText} Wide  , `
  } else if (commentary.isFour) {
    runText = ` ${runText} Four  , `
  } else if (commentary.isSix) {
    runText = ` ${runText} Six  , `
  } else {
    runText = ` ${runText} run ${commentary.totalRuns > 1 ? 's' : ''}, `
  }
  return runText;
}