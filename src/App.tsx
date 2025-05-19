import { useState } from "react";
import "./App.css";
import { keys } from "./keys";
import { calculate } from "./calculate";

function App() {
  const [input, setInput] = useState<string>("0");
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { action, value } = (e.target as HTMLButtonElement).dataset;
    const isValidAction = action && ["+", "-", "*", "/"].includes(action);

    if (action === "clear") {
      setInput("0");
      setIsComplete(false);
      return;
    }

    if (input === "0" && isValidAction) {
      setInput(`0${value}`);
      return;
    }

    if (isComplete && isValidAction) {
      setInput(`${input}${value}`);
      setIsComplete(false);
      return;
    }

    if (input === "0") {
      setInput(`${value}`);
      return;
    }

    if (isComplete) {
      setInput(`${value}`);
      setIsComplete(false);
      return;
    }

    if (action === "=") {
      const resultStr = `${calculate(input)}`;
      setInput(resultStr);
      setIsComplete(true);
      return;
    }

    setInput(`${input}${value}`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 text-2xl max-w-[304.467px]">
      <p className="bg-white col-span-full rounded py-2 px-4 overflow-y-scroll text-right text-black min-h-[48px]">
        {input}
      </p>
      {keys.length &&
        keys.map((key) => {
          const { action, classes, value } = key;

          if (action) {
            return (
              <button
                className={`py-2 px-4 rounded-md ${classes}`}
                onClick={handleClick}
                data-value={action}
                data-action={action}
                key={value}
              >
                {value}
              </button>
            );
          }
          return (
            <button
              className={`py-2 px-4 rounded-md ${classes}`}
              onClick={handleClick}
              data-value={value}
              key={value}
            >
              {value}
            </button>
          );
        })}
    </div>
  );
}

export default App;
