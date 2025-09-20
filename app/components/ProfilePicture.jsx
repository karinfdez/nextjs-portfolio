"use client";
import Image from "next/image";

export default function ProfilePicture({
  src = "/images/flip-images/karin-full.png",
  alt = "Profile photo",
  stroke = 6, // border thickness
}) {
  const d =
    "M30,45 C70,15 170,10 220,40 C245,55 250,110 235,160 C220,210 185,330 120,350 C80,362 40,350 30,315 C18,270 15,210 18,150 C20,95 15,65 30,45 Z";

  return (
    <svg
      width={260}
      height={386}
      viewBox="0 0 260 386"
      className="overflow-visible drop-shadow-[0_0_14px_rgba(249,115,22,0.12)]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="blob-clip-260x386">
          <path d={d} />
        </clipPath>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="#f97316"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />

      <foreignObject x="0" y="0" width="260" height="386" clipPath="url(#blob-clip-260x386)">
        <div className="w-full h-full bg-[#0b1120]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="260px"
            priority
          />
        </div>
      </foreignObject>
    </svg>
  );
}
