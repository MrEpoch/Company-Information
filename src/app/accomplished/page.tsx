import CardInfo from "@/components/CardInfo";
import { getAccomplished } from "../../../sanity/sanity-utils";

export default async function Page() {
    const { data } = await getAccomplished();
    const val = data;

    return (
        <div className="min-h-screen w-full dark:bg-gray-800">
            <div className="max-w-screen-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                {data.map((post: any, inx: number) => {
                    return (
                        <CardInfo site={"accomplished"} key={inx} info={post} />                
                    )
                })}
            </div>
        </div> 
    )
}
