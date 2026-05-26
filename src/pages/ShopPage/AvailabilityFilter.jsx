export default function AvailabilityFilter() {
  return (
    <form>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          name="availability"
          className="accent-black w-3.5 h-3.5"
        />
        In Stock
      </label>
      <label className="flex gap-2 items-center py-1 px-3">
        <input
          type="checkbox"
          name="availability"
          className="accent-black w-3.5 h-3.5"
        />
        Out Of Stock
      </label>
    </form>
  );
}
