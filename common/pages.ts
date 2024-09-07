import { Page } from "@/common/types/page";

export const navPages: Page[] = [
  { title: "~", path: "/", breadcrumb: "/home/julianv" },
  {
    title: "~/projects",
    path: "/projects",
  },
];

export const pages: Page[] = [
  ...navPages,
  {
    title: "~/projects/pong",
    path: "/projects/processing/pong",
    breadcrumb: "/projects/pong"
  },
  {
    title: "~/projects/lyrics-thing",
    path: "/projects/lyrics-thing",
  },
  {
    title: "~/projects/snake",
    path: "/projects/snake",
  },
  {
    title: "404",
    path: "/404",
  },
];
