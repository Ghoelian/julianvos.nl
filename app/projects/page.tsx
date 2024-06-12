import { Project } from "@/common/types/project";
import PongCover from "@/common/assets/portfolio/pong.webp";
import LyricsCover from "@/common/assets/portfolio/lyrics.webp";
import SnakeCover from "@/common/assets/portfolio/snake.webp";
import ProjectTile from "@/app/projects/project-tile";
import { Skeleton } from "@mui/material";

const projects: Project[] = [
  {
    coverImage: PongCover,
    title: "Pong",
    description: "Pong in p5.js",
    tags: ["Javascript", "p5.js"],
    path: "/projects/pong",
  },
  {
    coverImage: LyricsCover,
    title: "Lyrics chart",
    description: "Pong in p5.js",
    tags: ["Javascript", "p5.js"],
    path: "/projects/lyrics-thing",
  },
  {
    coverImage: SnakeCover,
    title: "Snake",
    description: "Pong in p5.js",
    tags: ["Javascript", "p5.js"],
    path: "/projects/snake",
  },
  {
    coverComponent: <Skeleton variant="rectangular" width={256} height={256} />,
    title: "Paytree dashboard",
    description:
      "Dashboard where customers can create products, add them to cash registers, and view their event's statistics.",
    tags: ["Javascript", "React.js", "MUI"],
    path: "/projects/paytree/dashboard",
  },
  {
    coverComponent: <Skeleton variant="rectangular" width={256} height={256} />,
    title: "Paytree POS",
    description:
      "Android POS app where customers can add products to a cart, and initiate payments on a variety of payments devices.",
    tags: ["Flutter", "Dart", "Kotlin"],
    path: "/projects/paytree/pos",
  },
  {
    coverComponent: <Skeleton variant="rectangular" width={256} height={256} />,
    title: "Paytree API",
    description: "API that powers the other Paytree projects.",
    tags: ["Kotlin", "Ktor", "Exposed", "PostgreSQL"],
    path: "/projects/paytree/api",
  },
];

const Portfolio = () => {
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectTile key={`projects-${idx}`} project={project} />
      ))}
    </>
  );
};

export default Portfolio;
