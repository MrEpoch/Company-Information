'use client';
import CopyToClipboard from "react-copy-to-clipboard";

export default function CopyItem({ children, value }) {
    return (
        <CopyToClipboard text={value}>
            {children}
        </CopyToClipboard>
    )
} 
