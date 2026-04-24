export default function ShopLayout({ children }) {
  return (
    <div className="flex gap-8">
      <aside className="w-1/5">{children[0]}</aside>

      <main className="w-4/5">{children[1]}</main>
    </div>
  );
}
