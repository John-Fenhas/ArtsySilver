import SizeFilterButton from "./SizeFilterButtton";

export default function SizeFilter() {
  const sizes = [6, 7, 8, 9];

  return (
    <div className="w-2/3 grid grid-cols-2 gap-2.5 m-auto">
      {sizes.map((size, i) => (
        <SizeFilterButton key={i} size={size} />
      ))}
    </div>
  );
}
