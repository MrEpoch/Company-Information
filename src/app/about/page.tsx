import WhoWeAre from "@/assets/WhoWeAre.webp";
import AloeVera from "@/assets/AloeVera.webp";
import PlasticBottle from "@/assets/PlasticBottle.webp";
import Info from "./AboutInfo";

const data = [
    {
        image: PlasticBottle,
        Text: `Our shared dedication to addressing pressing environmental concerns is the driving force behind our collective efforts. We 
        meticulously investigate the intricate cause-and-effect relationships associated with our actions and those of fellow individuals who 
        share our commitment to safeguarding our planet. Within our team, 
        you'll find individuals who hold their values and principles in the highest esteem, 
        fostering a culture of conscientiousness that guides us in our pursuit of a more sustainable and ecologically responsible future.`,
    },
    {
        image: AloeVera,
        Text: `We are group of passionate people caring about environmental issues which concerns this planet. We
                study cause and effect of our and actions of other people concerned about same issue. Our team is full
        of careful people which hold their values in high regard.`
    },
    {
        image: WhoWeAre,
        Text: `We believe that understanding the root causes and consequences of environmental challenges 
        is crucial for effective advocacy and action. With a diverse team of individuals who place a premium on their ethical values, 
        our commitment to this cause is unwavering. We work tirelessly to not only raise awareness about environmental issues but also 
        to implement practical solutions 
        that make a meaningful difference. Together, we aspire to be catalysts for positive change, promoting a 
        harmonious coexistence between humanity and our precious planet.`
    }
]

export default function About() {
    return (
        <div className="min-h-screen p-4 dark:bg-gray-800 w-full">
            <section className="max-w-screen-2xl mb-[5rem] mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col gap-[5rem]">
                <h1 className="text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Who we Are?
                </h1>
                <div className="flex flex-col gap-[10rem]">
                    {data.map((item, index) => (
                        <Info data={item} ind={index} key={index} />                    
                    ))}
                </div>
            </section>
        </div>
    )
}
