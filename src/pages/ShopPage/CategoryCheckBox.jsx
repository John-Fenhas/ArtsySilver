export default function CategoryCheckBox() {
  return (
    <div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Bangels</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Bracelets</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Earrings</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Rings</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Anklets</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-3 h-3 border
                  peer-checked:bg-black 
                  peer-checked:border-black 
                  flex items-center justify-center"
        >
          <span className=" text-white text-xs">✓</span>
        </div>

        <span>Sets</span>
      </label>
    </div>
  );
}
