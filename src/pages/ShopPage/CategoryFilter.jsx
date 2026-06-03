import categories from "../../data/categories";
import CategoryCheckBox from "./CategoryCheckBox";

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
  );
}
