import CategoryCheckBox from "./CategoryCheckBox";

const categories = [
  {
    value: "anklet",
    name: "Anklets",
  },
  {
    value: "bangle",
    name: "Bangles",
  },
  {
    value: "bracelet",
    name: "Bracelets",
  },
  {
    value: "earring",
    name: "Earrings",
  },
  {
    value: "necklace",
    name: "Necklaces",
  },
  {
    value: "ring",
    name: "Rings",
  },
  {
    value: "set",
    name: "Sets",
  },
];

export default function CategoryFilter() {
  return (
    <>
      {categories.map((category, i) => (
        <CategoryCheckBox
          key={i}
          categoryName={category.name}
          categoryValue={category.value}
        />
      ))}
    </>

    // <div>
    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Bangels</span>
    //   </label>

    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Bracelets</span>
    //   </label>
    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Earrings</span>
    //   </label>
    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Rings</span>
    //   </label>
    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Anklets</span>
    //   </label>
    //   <label className="flex items-center gap-2 cursor-pointer">
    //     <input type="checkbox" className="hidden peer" />

    //     <div
    //       className="w-3 h-3 border
    //               peer-checked:bg-black
    //               peer-checked:border-black
    //               flex items-center justify-center"
    //     >
    //       <span className=" text-white text-xs">✓</span>
    //     </div>

    //     <span>Sets</span>
    //   </label>
    // </div>
  );
}
