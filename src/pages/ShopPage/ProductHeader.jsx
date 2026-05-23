import SortDropDown from "./SortDropDown";

export default function ProductHeader({ productNumber, sortProducts }) {
  return (
    <div className="flex justify-between items-center pb-1.5">
      <p className="text-xs">{productNumber} Products</p>
      <SortDropDown sortProducts={sortProducts} />
    </div>
  );
}
