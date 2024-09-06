import { Project } from "@/common/types/project";
import PongCover from "@/common/assets/projects/pong.webp";
import LyricsCover from "@/common/assets/projects/lyrics.webp";
import SnakeCover from "@/common/assets/projects/snake.webp";
import PaytreeDashboardCover from "@/common/assets/projects/paytree-dashboard.png";
import PaytreePosCover from "@/common/assets/projects/paytree-pos.png";
import ProjectTile from "@/app/projects/project-tile";
import { Skeleton } from "@mui/material";
import { Metadata } from "next";

const projects: Project[] = [
  {
    coverImage: PaytreeDashboardCover,
    title: "Paytree dashboard",
    description:
      "Dashboard where customers can create products, add them to cash registers, and view their event's statistics.",
    tags: ["React.js", "Material UI"],
    path: "/projects/paytree/dashboard",
  },
  {
    coverImage: PaytreePosCover,
    title: "Paytree POS",
    description:
      "Android POS app where customers can add products to a cart, and initiate payments on a variety of payments devices.",
    tags: ["Flutter", "Dart", "Kotlin"],
    path: "/projects/paytree/pos",
  },
  {
    coverComponent: (
      <Skeleton
        variant="rectangular"
        animation={false}
        width={256}
        height={256}
      />
    ),
    title: "Paytree API",
    description: "API that powers the other Paytree projects.",
    tags: ["Kotlin", "Ktor", "Exposed", "PostgreSQL"],
    path: "/projects/paytree/api",
  },
  {
    coverImage: PongCover,
    title: "Pong",
    description:
      "Pong in Processing. Todo: convert these Processing projects to p5.js, so I can put a preview of them online here.",
    tags: ["Processing"],
    path: "https://codeberg.org/Ghoelian/processing-projects/src/branch/master/Pong",
  },
  {
    coverImage: LyricsCover,
    title: "Lyrics chart",
    description:
      "This project shows a graph of words in a song, showing a coloured rectangle where words intersect.",
    tags: ["Processing"],
    path: "https://codeberg.org/Ghoelian/processing-projects/src/branch/master/Song_lyrics_chart",
  },
  {
    coverImage: SnakeCover,
    title: "Snake",
    description: "Snake in Processing.",
    tags: ["Processing"],
    path: "https://codeberg.org/Ghoelian/processing-projects/src/branch/master/Snake",
  },
];

export const metadata: Metadata = {
  title: "/home/julianv/projects",
};

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
