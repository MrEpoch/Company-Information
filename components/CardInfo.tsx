'use client';

export default function CardInfo({ info, site="blog" }: { info: any, site?: string }) {
    console.log(info);
    return (
        <a href={`/${site}/${info.slug}`} className="aspect-[7/3] max-w-[400px] bg-red-500 flex flex-col min-h-[180px] sm:min-h-[300px]">
            <h3>{info.title}</h3>
        </a>
    )
}
