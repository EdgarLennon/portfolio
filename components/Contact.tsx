"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import Image from "next/image";
import Link from "next/link";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; link?: string }
>(({ className, children, link }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 relative items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ease-in-out hover:scale-110 hover:ease-in-out hover:cursor-pointer",
        className
      )}
    >
      <Link href={link || "#"} target="_blank" rel="noreferrer">
        <span>{children}</span>
      </Link>
    </div>
  );
});

Circle.displayName = "Circle";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex flex-col gap-3 h-[400px] w-full md:w-6/12 items-center justify-center overflow-hidden rounded-lg  bg-background p-10 "
      ref={containerRef}
    >
      <div className=" flex flex-col gap-2 p-2  justify-center items-center w-full">
        <h1 className="text-5xl md:text-5xl text-gray-500 font-bold">
          Contáctame
        </h1>
        <span className="w-full text-center md:font-semibold text-gray-500">
          Disponibilidad de trabajo inmediata, solo contáctame por cualquiera de
          mis redes
        </span>
      </div>
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div1Ref}
            link="https://www.linkedin.com/in/ken-michael-aguirre-rosado-b6039032b"
          >
            <Image
              src="contact/linkedin.svg"
              alt="linkedin"
              width={50}
              height={50}
            />
          </Circle>
          <Circle ref={div5Ref} link="mailto:ken.aguirre@gmail.com">
            <Image src="contact/mail.svg" alt="mail" width={50} height={50} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} link="https://github.com/EdgarLennon">
            <Image
              src="contact/github.svg"
              alt="linkedin"
              width={50}
              height={50}
            />
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-16 relative"
            link="https://www.facebook.com/PepePayo123"
          >
            <Image
              className="size-14 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="me/me.svg"
              alt="twitter"
              width={100}
              height={100}
            />
          </Circle>

          <Circle ref={div6Ref} link="https://x.com/EcgaRLenoN">
            <Image
              className="rounded-full"
              src="contact/twitter.svg"
              alt="twitter"
              width={100}
              height={100}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} link="https://wa.me/593992419399">
            <Image
              src="contact/whatsapp.svg"
              alt="twitter"
              width={100}
              height={100}
            />
          </Circle>
          <Circle ref={div7Ref} link="https://www.instagram.com/kenatiks/">
            <Image
              src="contact/instagram.svg"
              alt="twitter"
              width={100}
              height={100}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
