export default function ShopLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div>{children[0]}</div>
      <div className="flex gap-8">
        <aside className="w-1/5">{children[1]}</aside>

        <main className="w-4/5">{children[2]}</main>
      </div>
    </div>
  );
}
