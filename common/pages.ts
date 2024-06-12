import { Page } from "@/common/types/page";

export const navPages: Page[] = [
  { title: "~", path: "/", breadcrumb: "/home/julianv" },
  { title: "~/about", path: "/about" },
  {
    title: "~/projects",
    path: "/projects",
  },
  { title: "~/contact", path: "/contact" },
];

export const pages: Page[] = [
  ...navPages,
  {
    title: "~/projects/pong",
    path: "/projects/pong",
  },
  {
    title: "~/projects/lyrics-thing",
    path: "/projects/lyrics-thing",
  },
  {
    title: "~/projects/snake",
    path: "/projects/snake",
  },
];
