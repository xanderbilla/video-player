import videoData from "@/static/data";
import Card from "../components/Card";

export default function ImageGrid() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoData.map((media) => (
        <Card key={media.id} data={media} />
      ))}
    </div>
  );
}
