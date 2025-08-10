import { Tool } from "@/common/types/tool";
import Tile from "@/common/components/tile";

const tools: Tool[] = [
  {
    title: "Tidal shuffler",
    description: "Shuffle Tidal playlists",
    tags: [],
    path: "/tools/tidal-shuffler",
  },
];

export default function Tools() {
  return (
    <>
      {tools.map((tool, idx) => (
        <Tile key={`tools-${idx}`} item={tool} />
      ))}
    </>
  );
}
