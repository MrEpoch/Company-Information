'use client';

export default function CardInfo({ info }: { info: any }) {
    return (
        <a href={`/blog/${info.slug}`} className="aspect-[7/3] bg-red-500 flex flex-col min-h-[180px] sm:min-h-[300px]">
            <h3>{info.title}</h3>
        </a>
    )
}
