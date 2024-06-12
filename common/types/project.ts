import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Project = {
  coverImage?: StaticImageData;
  coverComponent?: ReactNode;

  title: string;
  description: string;
  path: string;

  tags: string[];
};
