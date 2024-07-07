"use client";
import { ReactNode } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function CopyItem({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  return (
    <CopyToClipboard onCopy={() => alert("Copied!")} text={value}>
      {children}
    </CopyToClipboard>
  );
}
