'use client';
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import LogoDark from "@/assets/logo-dark.png";
import Logo from "@/assets/logo.png";
import { useEffect, useState } from "react";


export default function HeaderImg() {
    const { theme } = useTheme();
    console.log(theme);
    const [image, setImage] = useState<any>(LogoDark); 
    useEffect(() => {
        setImage(theme === "dark" ? LogoDark : Logo);
    }, [setImage, theme]);
    return (
        <Image src={image} alt="logo" width={100} height={100} />
    )
}
