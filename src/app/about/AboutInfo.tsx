import Image from "next/image";

export default function Info({ data, ind }: { data: any; ind: number }) {
  return (
    <div
      className={`w-full h-full items-center flex ${ind % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"} flex-col xl:gap-5 gap-[5rem]`}
    >
      <div className="sm:w-1/2 w-[90%] mr-10 mt-[5rem] max-w-[800px] aspect-video bg-lime-500 h-full">
        <Image
          loading="eager"
          priority={ind === 0}
          width={800}
          height={400}
          src={data.image}
          alt="Who We Are"
          className={`translate-y-5 rounded ${ind % 2 === 0 ? "-rotate-6" : "rotate-6"} w-full
     h-full object-cover translate-x-5`}
        />
      </div>
      <p className="text-base sm:w-1/2 leading-relaxed text-gray-500 dark:text-gray-400">
        {data.Text}
      </p>
    </div>
  );
}
