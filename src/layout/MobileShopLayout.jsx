export default function MobileShopLayout({ children }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">{children[1]}</div>
      <div className="px-2">{children[0]}</div>
      <div className="px-2">{children[2]}</div>
    </div>
  );
}
