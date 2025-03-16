import Image from "next/image";
import React from "react";
import Link from "next/link";

export type Props = {
  title: string;
  description: string;
  logoLink: string;
  redirectLink: string;
};

const Project = ({ redirectLink, logoLink, title, description }: Props) => {
  return (
    <Link
      href={redirectLink}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={logoLink}
          fill
          className="object-cover transition duration-300"
          alt={title.toLowerCase()}
        />
      </div>
      <div className="p-3 h-[100px] flex flex-col">
        <h3 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
        <p className="font-normal text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default Project;