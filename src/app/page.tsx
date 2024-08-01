import ImageGrid from "./Layout/ImageGrid";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8 my-8">
      <ImageGrid />
    </main>
  );
}
