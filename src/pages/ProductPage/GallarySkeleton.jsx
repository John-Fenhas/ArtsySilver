export default function GallarySkeleton() {
  return (
    <div className="grid grid-cols-4 w-full h-full min-h-180 gap-4 ">
      <div className="w-full h-full col-span-4 row-span-3 shimmer"></div>
      <div className="w-full h-full shimmer"></div>
      <div className="w-full h-full shimmer"></div>
      <div className="w-full h-full shimmer"></div>
      <div className="w-full h-full shimmer"></div>
    </div>
  );
}
