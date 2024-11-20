"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle,
} from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import ChipLanguage from "./ChipLanguages";
import BoxReveal from "../magicui/box-reveal";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  languages: string[];
  webLink: string;
  textButton?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  languages,
  webLink,
  textButton,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col ">
      <CardHeader>
        <AspectRatio className="relative" ratio={16 / 9}>
          <Image src={image} alt="img" fill />
        </AspectRatio>
        <CardTitle>
          <BoxReveal>
            <span className="text-gray-500">{title}</span>
          </BoxReveal>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-6">
          <BoxReveal>
            <span className="text-gray-500">{description}</span>
          </BoxReveal>
        </CardDescription>
        <div className="flex flex-wrap w-full text-gray-500">
          {languages.map((lang, index) => (
            <BoxReveal key={`${lang}-${index}`}>
              <ChipLanguage label={lang} />
            </BoxReveal>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <BoxReveal>
          <Link
            className="text-gray-500"
            href={webLink}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ShinyButton> {textButton || "Ir a la web"}</ShinyButton>
          </Link>
        </BoxReveal>
      </CardFooter>
    </Card>
  );
}
