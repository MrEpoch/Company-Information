'use client';
import { useTheme } from "next-themes";
import Image from "next/image";
import LogoDark from "@/assets/logo-dark.png";
import Logo from "@/assets/logo.png";
import { useEffect, useState } from "react";


export default function HeaderImg() {
    const { theme } = useTheme();
    const [image, setImage] = useState<any>(LogoDark); 
    useEffect(() => {
        const html_dark = document.querySelector('html')?.classList;
        setImage(theme === "dark" || html_dark?.contains('dark') ? LogoDark : Logo);
    }, [setImage, theme]);
    return (
        <Image src={image} alt="logo" width={100} height={100} />
    )
}
