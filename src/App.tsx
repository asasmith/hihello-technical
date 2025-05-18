import "./App.css";
import { keys } from "./keys";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 text-2xl max-w-[304.467px]">
      <p className="bg-white col-span-full rounded py-2 px-4 overflow-y-scroll text-right text-black">""</p>
      {keys.length &&
        keys.map((key) => {
          const { classes, value } = key;
          return (
            <button className={`py-2 px-4 rounded-md ${classes}`}>
              {value}
            </button>
          );
        })}
    </div>
  );
}

export default App;
