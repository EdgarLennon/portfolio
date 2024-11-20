"use client";

interface ChipLanguageProps {
  label: string;
}

export default function ChipLanguage({ label }: ChipLanguageProps) {
  return <div className="p-[15px] w-auto bg-white">{label}</div>;
}
