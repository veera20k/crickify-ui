import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

export default async function page({ params: { id } }: { params: { id: string } }) {
  if (!id) {
    return notFound();
  }
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}`);
  // if (!response.ok) {
  //   return <div>Nodata</div>
  // }
  // const news = await response.json();
  return (
    <>
     <div>Details Page</div>
    </>
  )
}
