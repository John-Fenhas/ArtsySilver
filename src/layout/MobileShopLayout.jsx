export default function MobileShopLayout({ children }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">{children[1]}</div>
      <div>{children[0]}</div>
      <div>{children[2]}</div>
    </div>
  );
}
