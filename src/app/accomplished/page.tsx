import CardInfo from "@/components/CardInfo";
import { getAccomplished } from "../../../sanity/sanity-utils";

export default async function Page() {
    const { data } = await getAccomplished();
    const val = data;

    return (
        <div className="min-h-screen w-full bg-gray-800">
            {data.map((post: any, inx: number) => {
                return (
                    <CardInfo site={"accomplished"} key={inx} info={post} />                
                )
            })}
        </div> 
    )
}
