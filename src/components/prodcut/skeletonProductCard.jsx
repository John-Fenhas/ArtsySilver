export default function SkeletonProductCard({ className = "w-full" }) {
  return (
    <div className={`${className}`}>
      <div className="relative overflow-hidden rounded-md w-full h-full">
        {/* Image */}
        <div className="w-full aspect-[1/1.6] min-h-55 rounded-md shimmer" />

        {/* Button */}
        <div className="absolute left-4 right-4 bottom-4 h-10 rounded-lg shimmer" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center mt-4 space-y-2 w-full">
        {/* Title */}
        <div className="h-4 w-3/4 rounded shimmer" />

        {/* Price */}
        <div className="h-3 w-1/3 rounded shimmer" />
      </div>
    </div>
  );
}
